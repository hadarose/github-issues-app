import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { getToken } from "../shared/fetch-from-server";

const CompleteGitHubAuth = ({ setUser }) => {
  const userLoginCode = window.location.href.split("=")[1];
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      return;
    }

    getToken(userLoginCode).then((data) => {
      localStorage.setItem("token", data.data.token);
      setUser();
    });

    history.push("/repositories");
  }, [history, userLoginCode]);

  return <div>Loading...</div>;
};

export default CompleteGitHubAuth;
