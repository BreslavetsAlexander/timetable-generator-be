import { ISheet } from '../index';
import { CreateTimetableGroup } from '../Group';
import { CreateTimetableRow } from '../Row';

interface IGroup extends Omit<CreateTimetableGroup, 'sheetId'> {
  rows: Omit<CreateTimetableRow, 'sheetId' | 'groupId'>[];
}

export type CreateSheet = Omit<ISheet, 'id'> & {
  groups: IGroup[];
};
