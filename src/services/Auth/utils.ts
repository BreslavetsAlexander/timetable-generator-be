import { sign } from 'jsonwebtoken';
import { ENV_VARIABLES } from '../../constants';
import { IUser } from '../../definitions';

export const getToken = (id: IUser['id']): string => {
  return sign({ id }, ENV_VARIABLES.JWT_SECRET, {
    expiresIn: '1d',
  });
};
