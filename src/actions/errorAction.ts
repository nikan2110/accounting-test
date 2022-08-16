import { ERROR } from "../Utils/constants";



export const errorAction = (errorMessage: string) => ({
    type: ERROR,
    payload: errorMessage,
  });