import { TimetableRow } from '../../mongodb';
import { CreateTimetableRow } from '../../definitions/Row';
import { ISheet, ITimetableGroup, ITimetableRow } from '../../definitions';

class _TimetableRowService {
  async create(payload: CreateTimetableRow) {
    const row = await TimetableRow.create(payload);

    return row;
  }

  async getAll() {
    const rows = await TimetableRow.find();

    return rows;
  }

  async getAllByGroupId(groupId: ITimetableGroup['id']) {
    const rows = await TimetableRow.find({ groupId });

    return rows;
  }

  async getById(id: ITimetableRow['id']) {
    const row = await TimetableRow.findById(id);

    return row;
  }

  async updateById(id: ITimetableRow['id'], data: CreateTimetableRow) {
    await TimetableRow.updateOne({ _id: id }, data);

    return this.getById(id);
  }

  async deleteById(id: ITimetableRow['id']) {
    await TimetableRow.deleteOne({ _id: id });
  }

  async deleteAllBySheetId(sheetId: ISheet['id']) {
    await TimetableRow.deleteMany({ sheetId });
  }
}

export const TimetableRowService = new _TimetableRowService();
