import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { putStateAction } from "../actions/fillStateAction";
import { State, UserProfile } from "../types";
import { guest, profile, register } from "../utils/routes";
import Guest from "./Guest";
import Profile from "./Profile";

const Home = () => {
  const user = useSelector<State, UserProfile>((state) => state.user!);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let state = localStorage.getItem("state");
    if (state) {
      dispatch(putStateAction(JSON.parse(state!)));
      navigate(profile, { replace: true });
    } else {
      navigate(`${guest}/${register}`, { replace: true });
    }
  }, []);

  return user ? <Profile /> : <Guest />;
};

export default Home;
