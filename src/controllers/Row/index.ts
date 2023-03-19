import { Response, Request } from 'express';
import { TimetableRowService } from '../../services';
import { CreateTimetableRow } from '../../definitions/Row';
import { ITimetableRow } from '../../definitions';

class _TimetableRowController {
  async create(req: Request<{}, {}, CreateTimetableRow, {}, {}>, res: Response) {
    const row = await TimetableRowService.create(req.body);

    return res.json(row);
  }

  async getAll(_: Request, res: Response) {
    const rows = await TimetableRowService.getAll();

    return res.json(rows);
  }

  async getById(req: Request<Pick<ITimetableRow, 'id'>, {}, {}>, res: Response) {
    const row = await TimetableRowService.getById(req.params.id);

    return res.json(row);
  }

  async updateById(
    req: Request<Pick<ITimetableRow, 'id'>, {}, CreateTimetableRow, {}, {}>,
    res: Response,
  ) {
    const row = await TimetableRowService.updateById(req.params.id, req.body);

    return res.json(row);
  }

  async deleteById(req: Request<Pick<ITimetableRow, 'id'>, {}, {}, {}>, res: Response) {
    await TimetableRowService.deleteById(req.params.id);

    return res.json({
      message: 'The object was successfully deleted',
    });
  }
}

export const TimetableRowController = new _TimetableRowController();
