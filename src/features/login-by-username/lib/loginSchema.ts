export interface IError {
  message: string;
}

export interface ILoginSchema {
  username: string;
  password: string;
  isLoading: boolean;
  error?: IError;
}
