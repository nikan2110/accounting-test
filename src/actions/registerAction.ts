import { Dispatch, UserProfile } from "../types";
import { base_url, createToken, PUT_USER } from "../Utils/constants";
import { putTokenAction } from "./changePasswordAction";
import { errorAction } from "./errorAction";

export const putUserAction = (userProfile: UserProfile) => ({
  type: PUT_USER,
  payload: userProfile,
});

export const registerAction = (user: UserProfile, password: string) => {
  const newUser = { ...user, password };
  return (dispatch: Dispatch) => {
    fetch(`${base_url}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (response.ok) {
          const token = createToken(newUser.login!, newUser.password);
          dispatch(putTokenAction(token));
          return response.json();
        } else {
          throw new Error("User already exists");
        }
      })
      .then((user) => {
        dispatch(putUserAction(user));
      })
      .catch((err) => dispatch(errorAction(err.message)));
  };
};
