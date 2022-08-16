import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { error } from "../utils/routes";

const Error = ({ errorMessage }: { errorMessage: string }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(error, { replace: true });
  }, []);

  return (
    <div>
      <h1 style={{ color: "red" }}>{errorMessage}</h1>
    </div>
  );
};

export default Error;
