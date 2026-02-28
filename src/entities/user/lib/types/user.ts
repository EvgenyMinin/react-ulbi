export enum EUserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
}

export interface IUser {
  id: string;
  username: string;
  roles: EUserRole[];
}

export interface IUserSchema {
  isInitialized: boolean;
  authData?: IUser;
}
