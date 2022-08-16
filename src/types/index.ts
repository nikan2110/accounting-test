export type ChangePageType = (page: string | void) => void;

export interface State {
  user?: UserProfile;
  token?: string;
  error? : string;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  login?: string;
  roles?: Array<string>;
}

export interface Action {
  type: string;
  payload: any;
}

export interface PasswordData {
  login?: string;
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
}

export type Dispatch = (action: Action) => State;
