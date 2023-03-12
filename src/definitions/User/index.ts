import { IUser } from '../index';

export type CreateUser = Omit<IUser, 'id'>;
