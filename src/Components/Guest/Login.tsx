import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authorizationAction } from "../../actions/loginUpdateAction";
import { profile } from "../../Utils/routes";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickClear = () => {
    setLogin("");
    setPassword("");
  };

  const handleClickLogin = () => {
    const token = `Basic ${btoa(login + ":" + password)}`;
    dispatch(authorizationAction(token));
    navigate(profile, { replace: true });

  };

  return (
    <section className="row">
      <div className="p-1 my-5" >
        <label>
          Login:
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </label>
        <label className="p-2">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div className="my-3 g-0 mx-auto">
        <div className="button p-1">
          <button className="btn btn-success" onClick={handleClickLogin}>
            Login
          </button>
        </div>
        <div className="button p-1">
          <button className="btn btn-secondary" onClick={handleClickClear}>
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
