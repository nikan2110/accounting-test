import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Error from "./Components/Error";
import Guest from "./Components/Guest";
import Login from "./Components/Guest/Login";
import Register from "./Components/Guest/Register";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import ChangePassword from "./Components/Profile/ChangePassword";
import EditProfile from "./Components/Profile/EditProfile";
import {
  error,
  guest,
  home,
  login,
  password,
  profile,
  register,
  update,
} from "./Utils/routes";

function App() {
  const element = useRoutes([
    {
      path: home,
      element: <Home />,
      children: [
        {
          path: guest,
          element: Guest,
          children: [
            {
              path: login,
              element: Login,
            },
            {
              path: register,
              element: Register,
            },
          ],
        },
        {
          path: profile,
          element: Profile,
          children: [
            {
              path: password,
              element: ChangePassword,
            },
            {
              path: update,
              element: EditProfile,
            },
          ],
        },
        {
          path: error,
          element: Error,
        },
      ],
    },
  ]);

  return element;
}

export default App;
