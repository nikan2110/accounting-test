export const PUT_TOKEN = "putToken";
export const EDIT_PROFILE = "Edit profile";
export const PUT_USER = "putUser";
export const PUT_STATE = "pitState";
export const LOGOUT = "Logout";
export const ERROR = "Error";
export const base_url = "https://webaccounting.herokuapp.com/account";
export const createToken = (login: string, password: string) => {
  const token = `Basic ${btoa(login + ":" + password)}`;
  return token;
};
