import { Response, Request } from 'express';
import { UserService } from '../../services';
import { CreateUser } from '../../definitions/User';

class _UserController {
  async create(req: Request<{}, {}, CreateUser, {}, {}>, res: Response) {
    try {
      const user = await UserService.create(req.body);

      return res.json(user);
    } catch (e) {
      console.log(e);
    }
  }

  async getAll(req: Request, res: Response) {
    const users = await UserService.getAll();

    return res.json(users);
  }
}

export const UserController = new _UserController();
