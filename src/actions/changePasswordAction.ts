import { Dispatch, PasswordData } from "../types";
import { base_url, createToken, PUT_TOKEN } from "../utils/constants";
import { errorAction } from "./errorAction";

export const putTokenAction = (token: string) => ({
  type: PUT_TOKEN,
  payload: token,
});

export const changePasswordAction = (passwordData: PasswordData) => {
  if (passwordData.newPassword === passwordData.repeatNewPassword) {
    const oldToken = createToken(passwordData.login!, passwordData.oldPassword);
    const newToken = createToken(passwordData.login!, passwordData.newPassword);
    return (dispatch: Dispatch) => {
      fetch(`${base_url}/user/password`, {
        method: "PUT",
        headers: {
          Authorization: oldToken,
          "X-Password": passwordData.newPassword,
        },
      })
        .then((response) => {
          if (response.ok) {
            dispatch(putTokenAction(newToken));
          } else {
            throw new Error("Wrong old password");
          }
        })
        .catch((err) => dispatch(errorAction(err.message)));
    };
  } else {
    return (dispatch: Dispatch) => {
      dispatch(errorAction("New password doesn't match"));
    };
  }
};
