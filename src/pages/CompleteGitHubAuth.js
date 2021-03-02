import { getToken } from "../shared/fetch-from-server";
import { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";

const CompleteGitHubAuth = () => {
  const userLoginCode = window.location.href.split("=")[1];
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    getToken(userLoginCode).then((data) => {
      localStorage.setItem("token", data.data.token);
      setToken(data.data.token);
    });
  }, [userLoginCode]);

  return <div>{!token ? "loading" : <Redirect to="/repositories" />}</div>;
};

export default CompleteGitHubAuth;

// const userLoginCode = window.location.href.split("=")[1];
// const history = useHistory();
//
// useEffect(() => {
//   getToken(userLoginCode).then((data) => {
//     localStorage.setItem("token", data.data.token);
//     history.push("/repositories");
//   });
// }, [history, userLoginCode]);
//
// return <div>loading</div>;
// };
//
// export default CompleteGitHubAuth;
