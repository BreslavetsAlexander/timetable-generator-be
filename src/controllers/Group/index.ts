import { Response, Request } from 'express';
import { TimetableGroupService } from '../../services';
import { CreateTimetableGroup } from '../../definitions/Group';
import { ITimetableGroup } from '../../definitions';

class _TimetableGroupController {
  async create(req: Request<{}, {}, CreateTimetableGroup, {}, {}>, res: Response) {
    const group = await TimetableGroupService.create(req.body);

    return res.json(group);
  }

  async getAll(_: Request, res: Response) {
    const groups = await TimetableGroupService.getAll();

    return res.json(groups);
  }

  async getById(req: Request<Pick<ITimetableGroup, 'id'>, {}, {}>, res: Response) {
    const group = await TimetableGroupService.getById(req.params.id);

    return res.json(group);
  }

  async updateById(
    req: Request<Pick<ITimetableGroup, 'id'>, {}, CreateTimetableGroup, {}, {}>,
    res: Response,
  ) {
    const group = await TimetableGroupService.updateById(req.params.id, req.body);

    return res.json(group);
  }

  async deleteById(req: Request<Pick<ITimetableGroup, 'id'>, {}, {}, {}>, res: Response) {
    await TimetableGroupService.deleteById(req.params.id);

    return res.json({
      message: 'The object was successfully deleted',
    });
  }
}

export const TimetableGroupController = new _TimetableGroupController();
