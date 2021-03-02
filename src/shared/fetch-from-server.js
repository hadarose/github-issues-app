import axios from "axios";

exports.getToken = (userLoginCode) =>
  axios.get("http://localhost:8000/authenticate/" + userLoginCode);

exports.getRepositories = (token) => {
  return axios.get("https://api.github.com/user/repos", {
    headers: {
      Authorization: "token " + token,
      Accept: "application/vnd.github.v3+json",
    },
  });
};
