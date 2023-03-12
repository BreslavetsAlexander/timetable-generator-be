interface IWithId {
  id: number;
}

export type OmitId<T extends IWithId> = Omit<T, 'id'>;
