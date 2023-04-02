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
}

export const SheetController = new _SheetController();