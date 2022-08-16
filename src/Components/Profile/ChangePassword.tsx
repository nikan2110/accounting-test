import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePasswordAction } from "../../actions/changePasswordAction";
import { ChangePageType, PasswordData, State, UserProfile } from "../../types";
import { profile } from "../../Utils/routes";

const ChangePassword = ({ setPage }: { setPage: ChangePageType }) => {
  const { login } = useSelector<State, UserProfile>((state) => state.user!);
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [repeatNewPassword, setRepeatNewPassword] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickClear = () => {
    setOldPassword("");
    setNewPassword("");
    setRepeatNewPassword("");
  };

  const handleClickChangePassword = () => {
    const passwordData: PasswordData = {
      login,
      oldPassword,
      newPassword,
      repeatNewPassword,
    };
    dispatch(changePasswordAction(passwordData));
    setPage();
    navigate(profile, { replace: true });
  };

  return (
    <div className="col">
      <label className="p-2">
        Old password:
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value.trim())}
        />
      </label>
      <label className="p-2">
        New password:
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value.trim())}
        />
      </label>
      <label className="p-2">
        Repeat new password:
        <input
          type="password"
          value={repeatNewPassword}
          onChange={(e) => setRepeatNewPassword(e.target.value.trim())}
        />
      </label>
      <button className="btn btn-success" onClick={handleClickChangePassword}>
        Save
      </button>
      <button className="btn btn-secondary" onClick={handleClickClear}>
        Reset
      </button>
      <button
        className="btn  btn-dark"
        onClick={() => {
          setPage();
          navigate(profile, { replace: true });
        }}
      >
        Back
      </button>
    </div>
  );
};

export default ChangePassword;
