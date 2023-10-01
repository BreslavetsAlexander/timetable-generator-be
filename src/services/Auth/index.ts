import { genSalt, hash, compare } from 'bcrypt';
import { UserService } from '../../services';
import { LoginPayload, RegisterPayload } from '../../definitions/Auth';
import { getToken } from './utils';

class _AuthService {
  async register(payload: RegisterPayload) {
    const { firstName, lastName, password, username } = payload;
    const isDuplicate = await UserService.isDuplicate(username);

    if (isDuplicate) {
      throw new Error('User with same username already exists');
    }

    const salt = await genSalt(10);
    const passwordHash = await hash(password, salt);
    const user = await UserService.create({
      firstName,
      lastName,
      password: passwordHash,
      username,
    });

    const token = getToken(user.id);

    return {
      user,
      token,
    };
  }

  async login(payload: LoginPayload) {
    const { password, username } = payload;
    const user = await UserService.getByUsername(username);

    if (!user) {
      throw new Error('User not found');
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      throw new Error('username or password are wrong');
    }

    const token = getToken(user.id);

    return {
      user,
      token,
    };
  }
}

export const AuthService = new _AuthService();
