import { Response, Request } from 'express';
import { SheetService } from '../../services';
import { CreateSheet } from '../../definitions/Sheet';
import { ISheet } from '../../definitions';

class _SheetController {
  async create(req: Request<{}, {}, CreateSheet, {}, {}>, res: Response) {
    const sheet = await SheetService.create(req.body);

    return res.json(sheet);
  }

  async getAll(_: Request, res: Response) {
    const sheets = await SheetService.getAll();

    return res.json(sheets);
  }

  async getById(req: Request<Pick<ISheet, 'id'>, {}, {}>, res: Response) {
    const sheet = await SheetService.getById(req.params.id);

    return res.json(sheet);
  }

  async updateById(req: Request<Pick<ISheet, 'id'>, {}, CreateSheet, {}, {}>, res: Response) {
    const sheet = await SheetService.updateById(req.params.id, req.body);

    return res.json(sheet);
  }

  async deleteById(req: Request<Pick<ISheet, 'id'>, {}, {}, {}>, res: Response) {
    await SheetService.deleteById(req.params.id);

    return res.json({
      message: 'The object was successfully deleted',
    });
  }

  async generateHtmlFile(req: Request<Pick<ISheet, 'id'>, {}, {}, {}>, res: Response) {
    await SheetService.generateHtmlFile(req.params.id);

    return res.json({
      message: 'The html file was successfully generated',
    });
  }

  getHtmlFile(req: Request<Pick<ISheet, 'id'>, {}, {}, {}>, res: Response) {
    const filePath = SheetService.getHtmlFile(req.params.id);

    return res.sendFile(filePath);
  }

  deleteHtmlFile(req: Request<Pick<ISheet, 'id'>, {}, {}, {}>, res: Response) {
    SheetService.deleteHtmlFile(req.params.id);

    return res.json({
      message: 'The html file was successfully deleted',
    });
  }

  async generatePdfFile(req: Request<Pick<ISheet, 'id'>, {}, {}, {}>, res: Response) {
    await SheetService.generatePdfFile(req.params.id);

    return res.json({
      message: 'The pdf file was successfully generated',
    });
  }

  getPdfFile(req: Request<Pick<ISheet, 'id'>, {}, {}, {}>, res: Response) {
    const filePath = SheetService.getPdfFile(req.params.id);

    return res.sendFile(filePath);
  }

  deletePdfFile(req: Request<Pick<ISheet, 'id'>, {}, {}, {}>, res: Response) {
    SheetService.deletePdfFile(req.params.id);

    return res.json({
      message: 'The pdf file was successfully deleted',
    });
  }
}

export const SheetController = new _SheetController();
