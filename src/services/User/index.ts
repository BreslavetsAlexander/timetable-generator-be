import { User } from '../../mongodb';
import { CreateUser } from '../../definitions/User';
import { IUser } from '../../definitions';

class _UserService {
  async create(payload: CreateUser) {
    const user = await User.create(payload);

    return user;
  }

  async getAll() {
    const users = await User.find();

    return users;
  }

  async getById(id: IUser['id']) {
    const user = await User.findById(id);

    return user;
  }

  async updateById(id: IUser['id'], data: CreateUser) {
    await User.updateOne({ _id: id }, data);

    return this.getById(id);
  }

  async deleteById(id: IUser['id']) {
    await User.deleteOne({ _id: id });
  }
}

export const UserService = new _UserService();
