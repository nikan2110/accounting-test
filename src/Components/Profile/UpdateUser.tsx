import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { State, UserProfile } from "../../types";
import { EDIT_PROFILE, PUT_TOKEN } from "../../utils/constants";
import { password, profile, update } from "../../utils/routes";
import ChangePassword from "./ChangePassword";
import EditProfile from "./EditProfile";



type Active = string | void;

const UpdateUser = () => {
  useSelector<State, UserProfile>((state) => state.user!);
  const navigate = useNavigate();

  const [page, setPage] = useState<Active>();
  switch (page) {
    case PUT_TOKEN:
      return <ChangePassword setPage={setPage} />;
    case EDIT_PROFILE:
      return <EditProfile setPage={setPage} />;

    default:
      return (
        <div className="col">
          <div className="button p-1">
            <button
              className="btn btn-lg btn-info "
              onClick={() => {
                setPage(PUT_TOKEN);
                navigate(`${profile}/${password}`, { replace: true });
              }}
            >
              Change Password
            </button>
          </div>
          <div className="button p-1">
            <button
              className="btn btn-lg btn-info"
              onClick={() => {
                setPage(EDIT_PROFILE);
                navigate(`${profile}/${update}`, { replace: true });
              }}
            >
              Edit profile
            </button>
          </div>
        </div>
      );
  }
};

export default UpdateUser;
