import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Error from "./components/Error";
import Guest from "./components/Guest";
import Login from "./components/Guest/Login";
import Register from "./components/Guest/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ChangePassword from "./components/Profile/ChangePassword";
import EditProfile from "./components/Profile/EditProfile";
import {
  error,
  guest,
  home,
  login,
  password,
  profile,
  register,
  update,
} from "./utils/routes";

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
