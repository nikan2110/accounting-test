import { Action, State } from "../types";
import { ERROR, LOGOUT, PUT_STATE, PUT_TOKEN, PUT_USER } from "../utils/constants";

export const initialState: State = {};

export const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case PUT_USER:
      state = { ...state, user: action.payload };
      localStorage.setItem("state", JSON.stringify(state));
      return state;
    case PUT_TOKEN:
      state = { ...state, token: action.payload};
      localStorage.setItem("state", JSON.stringify(state));
      return state;
    case PUT_STATE:
      return action.payload;
    case LOGOUT:
      localStorage.removeItem("state");
      return initialState;
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
