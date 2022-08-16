import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { upgradeDataAction } from "../../actions/loginUpdateAction";
import { ChangePageType, State, UserProfile } from "../../types";
import { profile } from "../../Utils/routes";

const EditProfile = ({ setPage }: { setPage: ChangePageType }) => {
  const { token } = useSelector<State, State>((state) => state);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickClear = () => {
    setFirstName("");
    setLastName("");
  };

  const handleClickUpdate = () => {
    const user: UserProfile = {
      firstName,
      lastName,
    };
    dispatch(upgradeDataAction(user, token!));
    setPage();
    navigate(profile, { replace: true });
  };

  return (
    <div className="col">
      <label className="p-2">
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value.trim())}
        />
      </label>
      <label className="p-2">
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value.trim())}
        />
      </label>
      <button className="btn btn-success" onClick={handleClickUpdate}>
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

export default EditProfile;
