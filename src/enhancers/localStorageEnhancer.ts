import { Action, Dispatch, State } from "../types";
import { LOGOUT, PUT_TOKEN } from "../Utils/constants";

// export const localStorageEnhancer =
//   ({ dispatch, getState }: { dispatch: Dispatch; getState: State }) =>
//   (next: any) =>
//   (action: Action) => {
//     switch (action.type) {
//       case LOGOUT:
//         localStorage.clear();
//         break;
//       case PUT_TOKEN:
//         localStorage.setItem("token", action.payload);
//     }

//     return next(action);
//   };
