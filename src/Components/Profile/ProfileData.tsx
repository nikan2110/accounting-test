import React from "react";
import { useSelector } from "react-redux";
import { State, UserProfile } from "../../types";

const ProfileData = () => {
  const { firstName, lastName, roles } = useSelector<State, UserProfile>(
    (state) => state.user!
  );
  return (
    <div className="row">
      <div className="col">
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Roles: </p>
        <ul>
          {roles!.map(role => <li key ={role}>{role}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default ProfileData;
