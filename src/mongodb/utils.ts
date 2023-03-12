import { Schema } from 'mongoose';

export const renameIdField = <T>(schema: Schema<T>) => {
  schema.virtual('id').get(function () {
    return this._id;
  });

  schema.set('toJSON', {
    virtuals: true,
    transform: (_, ret) => {
      delete ret._id;
    },
  });
};
