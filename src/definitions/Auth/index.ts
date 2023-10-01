import { IUser } from '../index';

export type LoginPayload = Pick<IUser, 'username' | 'password'>;

export type RegisterPayload = Omit<IUser, 'id'>;
