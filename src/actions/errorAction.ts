import { ERROR } from "../utils/constants";



export const errorAction = (errorMessage: string) => ({
    type: ERROR,
    payload: errorMessage,
  });