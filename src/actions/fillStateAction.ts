import { State } from "../types";
import { PUT_STATE } from "../utils/constants";

export const putStateAction = (state: State) => ({
  type: PUT_STATE,
  payload: state,
});
