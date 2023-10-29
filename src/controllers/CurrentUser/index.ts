import { Response, Request } from 'express';
import { CurrentUserService } from '../../services';
import { IWithUserId } from '../../definitions/controllers';
import { CreateUser } from '../../definitions/User';

class _CurrentUserController {
  async get(req: Request<{}, {}, IWithUserId, {}, {}>, res: Response) {
    const user = await CurrentUserService.get(req.body.userId);

    return res.json(user);
  }

  async update(req: Request<{}, {}, IWithUserId & CreateUser, {}, {}>, res: Response) {
    const { userId, ...data } = req.body;
    const user = await CurrentUserService.update(userId, data);

    return res.json(user);
  }

  async delete(req: Request<{}, {}, IWithUserId, {}, {}>, res: Response) {
    await CurrentUserService.delete(req.body.userId);

    return res.json({
      message: 'The object was successfully deleted',
    });
  }

  async getSheets(req: Request<{}, {}, IWithUserId, {}, {}>, res: Response) {
    const sheets = await CurrentUserService.getSheets(req.body.userId);

    return res.json(sheets);
  }
}

export const CurrentUserController = new _CurrentUserController();
