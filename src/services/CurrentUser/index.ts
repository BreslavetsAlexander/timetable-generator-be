import { SheetService, UserService } from '../../services';
import { IUser } from '../../definitions';
import { CreateUser } from '../../definitions/User';

class _CurrentUserService {
  async get(id: IUser['id']) {
    const user = await UserService.getById(id);

    return user;
  }

  async update(id: IUser['id'], data: CreateUser) {
    const user = await UserService.updateById(id, data);

    return user;
  }

  async delete(id: IUser['id']) {
    await UserService.deleteById(id);
  }

  async getSheets(id: IUser['id']) {
    const sheets = await SheetService.getByAuthorId(id);

    return sheets;
  }
}

export const CurrentUserService = new _CurrentUserService();
