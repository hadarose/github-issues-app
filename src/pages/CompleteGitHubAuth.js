import { getToken } from "../shared/fetch-from-server";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const CompleteGitHubAuth = ({ setUser }) => {
  const userLoginCode = window.location.href.split("=")[1];
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/repositories");
      return;
    }

    getToken(userLoginCode).then((data) => {
      localStorage.setItem("token", data.data.token);
      setUser();
      history.push("/repositories");
    });
  }, [history, userLoginCode]);

  return <div>Loading...</div>;
};

export default CompleteGitHubAuth;
