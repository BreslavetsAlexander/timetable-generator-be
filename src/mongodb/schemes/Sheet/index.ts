import { Schema, model } from 'mongoose';
import { ISheet } from '../../../definitions';
import { OmitId } from '../../types';
import { DEFAULT_SCHEMA_OPTIONS } from '../../constants';
import { renameIdField } from '../../utils';

const SheetSchema = new Schema<OmitId<ISheet>>(
  {
    authorId: { type: String, required: true },
    description: { type: String, required: true },
    name: { type: String, required: true },
  },
  DEFAULT_SCHEMA_OPTIONS,
);

renameIdField(SheetSchema);

export const Sheet = model('Sheet', SheetSchema);
