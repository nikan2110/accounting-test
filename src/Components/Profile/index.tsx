import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../actions/loginUpdateAction";
import { State } from "../../types";
import { guest } from "../../utils/routes";
import Error from "../Error";
import ProfileData from "./ProfileData";
import UpdateUser from "./UpdateUser";

const Profile = () => {
  const error = useSelector<State, string>((state) => state.error!);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!error) {
    return (
      <>
        <div className="section container-fluid p-5 my-5">
          <ProfileData />
        </div>
        <div className="footer container-fluid p-5 my-5 text-center">
          <UpdateUser />
          <div className="col my-3 ">
            <button
              className="btn btn-lg btn-danger"
              onClick={() => {
                dispatch(logoutAction());
                navigate(guest, { replace: true });
              }}
            >
              Log out
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return <Error errorMessage={error} />;
  }
};

export default Profile;
