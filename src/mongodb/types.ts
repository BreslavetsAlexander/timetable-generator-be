import { IWithId } from '../definitions';

export type OmitId<T extends IWithId> = Omit<T, 'id'>;
