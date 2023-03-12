import { Schema, model } from 'mongoose';
import { IUser } from '../../../definitions';
import { OmitId } from '../../types';
import { DEFAULT_SCHEMA_OPTIONS } from '../../constants';
import { renameIdField } from '../../utils';

const UserSchema = new Schema<OmitId<IUser>>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
  },
  DEFAULT_SCHEMA_OPTIONS,
);

renameIdField(UserSchema);

export const User = model('User', UserSchema);
