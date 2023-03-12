import { User } from '../../mongodb';
import { CreateUser } from '../../definitions/User';

class _UserService {
  async create(payload: CreateUser) {
    const candidate = await User.findOne({ username: payload.username });

    if (candidate) {
      throw new Error('User with same username already exists');
    }

    const user = await User.create(payload);

    return user;
  }

  async getAll() {
    const users = await User.find();

    return users;
  }
}

export const UserService = new _UserService();
