export interface IWithId {
  id: string;
}

export interface IUser extends IWithId {
  firstName: string;
  lastName: string;
  username: string;
}

export interface ITimetableRow extends IWithId {
  start: string;
  end: string;
  name: string;
}