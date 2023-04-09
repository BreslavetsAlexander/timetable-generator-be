import { Schema, model } from 'mongoose';
import { ITimetableGroup } from '../../../definitions';
import { OmitId } from '../../types';
import { DEFAULT_SCHEMA_OPTIONS } from '../../constants';
import { renameIdField } from '../../utils';

const TimetableGroupSchema = new Schema<OmitId<ITimetableGroup>>(
  {
    name: { type: String, required: true },
    sheetId: { type: String, required: true },
  },
  DEFAULT_SCHEMA_OPTIONS,
);

renameIdField(TimetableGroupSchema);

export const TimetableGroup = model('TimetableGroup', TimetableGroupSchema);
