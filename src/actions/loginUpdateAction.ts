import { Dispatch, UserProfile } from "../types";
import { base_url, LOGOUT } from "../utils/constants";
import { putTokenAction } from "./changePasswordAction";
import { errorAction } from "./errorAction";
import { putUserAction } from "./registerAction";

export const authorizationAction = (token: string) => {
  return (dispatch: Dispatch) => {
    fetch(`${base_url}/login`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch(putTokenAction(token));
          return response.json();
        } else {
          throw new Error("Wrong login/password or user doesn't exist");
        }
      })
      .then((data) => dispatch(putUserAction(data)))
      .catch((err) => dispatch(errorAction(err.message)));
  };
};

export const upgradeDataAction = (userProfile: UserProfile, token: string) => {
  return (dispatch: Dispatch) => {
    fetch(`${base_url}/user`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userProfile),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => dispatch(putUserAction(data)))
      .catch((err) => console.log(err.message));
  };
};

export const logoutAction = () => ({
  type: LOGOUT,
});
