import { Schema, model } from 'mongoose';
import { ITimetableRow } from '../../../definitions';
import { OmitId } from '../../types';
import { DEFAULT_SCHEMA_OPTIONS } from '../../constants';
import { renameIdField } from '../../utils';

const TimetableRowSchema = new Schema<OmitId<ITimetableRow>>(
  {
    name: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: true },
  },
  DEFAULT_SCHEMA_OPTIONS,
);

renameIdField(TimetableRowSchema);

export const TimetableRow = model('TimetableRow', TimetableRowSchema);
