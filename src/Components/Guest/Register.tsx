import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerAction } from "../../actions/registerAction";
import { UserProfile } from "../../types";
import { profile } from "../../utils/routes";

const Register = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickRegister = () => {
    if (!login && !password && !firstName && !lastName) {
      alert("Fill in all fields");
    } else {
      const user: UserProfile = {
        firstName,
        lastName,
        login,
      };
      dispatch(registerAction(user, password));
      navigate(profile, { replace: true });
    }
  };

  const handleClickClear = () => {
    setLogin("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <section className="row">
      <div className="p-1 my-5">
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
        <label className="p-2">
          Login:
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value.trim())}
          />
        </label>
        <label className="p-2">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
          />
        </label>
      </div>
      <div className="my-3 col-lg-7 offset-lg-2 g-0 mx-auto">
        <div className="button p-1">
          <button className="btn btn-success" onClick={handleClickRegister}>
            Register
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

export default Register;
