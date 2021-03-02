import axios from "axios";

export const getToken = (userLoginCode) =>
  axios.get("http://localhost:8000/authenticate/" + userLoginCode);

export const getRepositories = (token) =>
  axios.get("https://api.github.com/user/repos", {
    headers: {
      Authorization: "token " + token,
      Accept: "application/vnd.github.v3+json",
    },
  });

export const getIssues = (owner, repoName) =>
  axios.get(
    "https://api.github.com/repos/" + owner + "/" + repoName + "/issues",
    {
      headers: { Accept: "application/vnd.github.v3+json" },
    }
  );
