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

  async getByUsername(username: IUser['username']) {
    const user = await User.findOne({ username });

    return user;
  }

  async updateById(id: IUser['id'], data: CreateUser) {
    await User.updateOne({ _id: id }, data);

    return this.getById(id);
  }

  async deleteById(id: IUser['id']) {
    await User.deleteOne({ _id: id });
  }

  async isDuplicate(username: IUser['username']) {
    const candidate = await User.findOne({ username });

    return !!candidate;
  }
}

export const UserService = new _UserService();
