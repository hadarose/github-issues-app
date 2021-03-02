import { getToken } from "../shared/fetch-from-server";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";

const CompleteGitHubAuth = () => {
  const userLoginCode = window.location.href.split("=")[1];

  useEffect(() => {
    getToken(userLoginCode).then((data) =>
      localStorage.setItem("token", data.data.token)
    );
  }, []);

  return <Redirect to="/repositories" />;
};

export default CompleteGitHubAuth;
