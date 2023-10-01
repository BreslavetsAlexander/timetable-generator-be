import { Response, Request } from 'express';
import { UserService } from '../../services';
import { CreateUser } from '../../definitions/User';
import { IUser } from '../../definitions';

class _UserController {
  async create(req: Request<{}, {}, CreateUser, {}, {}>, res: Response) {
    const row = await UserService.create(req.body);

    return res.json(row);
  }

  async getAll(_: Request, res: Response) {
    const rows = await UserService.getAll();

    return res.json(rows);
  }

  async getById(req: Request<Pick<IUser, 'id'>, {}, {}>, res: Response) {
    const row = await UserService.getById(req.params.id);

    return res.json(row);
  }

  async updateById(req: Request<Pick<IUser, 'id'>, {}, CreateUser, {}, {}>, res: Response) {
    const row = await UserService.updateById(req.params.id, req.body);

    return res.json(row);
  }

  async deleteById(req: Request<Pick<IUser, 'id'>, {}, {}, {}>, res: Response) {
    await UserService.deleteById(req.params.id);

    return res.json({
      message: 'The object was successfully deleted',
    });
  }
}

export const UserController = new _UserController();
