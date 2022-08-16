import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { State } from "../../types";
import { guest, login, register } from "../../Utils/routes";
import Error from "../Error";
import Login from "./Login";
import Register from "./Register";

const Guest = () => {
  const error = useSelector<State, string>((state) => state.error!);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const navigate = useNavigate();

  if (!error) {
    return (
      <>
        <section className="section container-fluid p-5 my-5 text-center">
          {isLogin ? <Login /> : <Register />}
        </section>
        <div className="footer container-fluid p-5 my-5 text-center">
          <button
            className="btn btn-lg btn-primary"
            onClick={() => {
              setIsLogin((prev) => !prev);
              isLogin
                ? navigate(`${guest}/${register}`, { replace: true })
                : navigate(`${guest}/${login}`, { replace: true });
            }}
          >
            {isLogin ? "Switch to Register" : "Switch to Login"}
          </button>
        </div>
      </>
    );
  } else {
    return <Error errorMessage={error} />;
  }
};

export default Guest;
