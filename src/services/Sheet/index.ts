import { writeFileSync, readFileSync, rmSync } from 'fs';
import { resolve } from 'path';
import { compile } from 'ejs';
import { generatePdf } from 'html-pdf-node';
import { Sheet } from '../../mongodb';
import { CreateSheet } from '../../definitions/Sheet';
import { ISheet } from '../../definitions';
import { TimetableGroupService } from '../Group';
import { TimetableRowService } from '../Row';
import { getHtmlFilePath, getPdfFilePath } from './utils';
import { TEMPLATES_FOLDER } from '../../constants';

class _SheetService {
  async create(payload: CreateSheet) {
    const { authorId, description, groups, name } = payload;

    const sheet = await Sheet.create({
      authorId,
      description,
      name,
    });

    const groupsList = groups.map(async (group) => {
      const createdGroup = await TimetableGroupService.create({
        name: group.name,
        sheetId: sheet.id,
      });

      const rowsList = await Promise.all(
        group.rows.map((row) => {
          return TimetableRowService.create({
            ...row,
            sheetId: sheet.id,
            groupId: createdGroup.id,
          });
        }),
      );

      const rows = rowsList.map((row) => {
        return {
          start: row.start,
          end: row.end,
          name: row.name,
          groupId: createdGroup.id,
          sheetId: sheet.id,
        };
      });

      return {
        id: createdGroup.id,
        name,
        sheetId: sheet.id,
        rows,
      };
    });

    const createdGroups = await Promise.all(groupsList);

    return {
      id: sheet.id,
      name: sheet.name,
      description: sheet.description,
      authorId,
      groups: createdGroups,
    };
  }

  async getAll() {
    const sheets = await Sheet.find();

    return sheets;
  }

  async getById(id: ISheet['id']) {
    const sheet = await Sheet.findById(id);
    const groupsBySheetId = await TimetableGroupService.getAllBySheetId(id);

    const groups = await Promise.all(
      groupsBySheetId.map(async (group) => {
        const { id, name, sheetId } = group;
        const rows = await TimetableRowService.getAllBySheetIdAndGroupId(sheetId, id);

        return {
          id,
          name,
          sheetId,
          rows,
        };
      }),
    );

    return {
      id: sheet?.id,
      name: sheet?.name,
      description: sheet?.description,
      authorId: sheet?.authorId,
      groups,
    };
  }

  async updateById(id: ISheet['id'], data: CreateSheet) {
    await Sheet.updateOne({ _id: id }, data);

    return this.getById(id);
  }

  async deleteById(id: ISheet['id']) {
    await Sheet.deleteOne({ _id: id });
    await TimetableGroupService.deleteAllBySheetId(id);
    await TimetableRowService.deleteAllBySheetId(id);
    this.deleteHtmlFile(id);
  }

  async generateHtmlFile(id: ISheet['id']) {
    const sheet = await this.getById(id);
    const templateFilePath = resolve('./', TEMPLATES_FOLDER, 'sheetTemplate.html');
    const templateFileContent = readFileSync(templateFilePath, 'utf-8');

    const content = compile(templateFileContent)(sheet).replace(/\s{2,}/g, '');

    writeFileSync(getHtmlFilePath(id), content, {
      encoding: 'utf-8',
    });
  }

  getHtmlFile(id: ISheet['id']) {
    return getHtmlFilePath(id);
  }

  deleteHtmlFile(id: ISheet['id']) {
    rmSync(getHtmlFilePath(id));
  }

  async generatePdfFile(id: ISheet['id']) {
    await this.generateHtmlFile(id);
    const content = readFileSync(getHtmlFilePath(id), 'utf-8');

    generatePdf(
      { content },
      {
        format: 'A4',
        path: getPdfFilePath(id),
      },
    );
  }

  getPdfFile(id: ISheet['id']) {
    return getPdfFilePath(id);
  }

  deletePdfFile(id: ISheet['id']) {
    rmSync(getPdfFilePath(id));
  }
}

export const SheetService = new _SheetService();
