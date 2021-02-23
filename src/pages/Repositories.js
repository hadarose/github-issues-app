import Repository from "./Repository";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 50px;
`;

const SearchBox = styled.input`
  flex: 1;
  margin-right: 10px;
  border-radius: 5px;
  border: 0.75px solid gray;
  padding: 20px;
`;

const NewButton = styled.button`
  background-color: green;
  color: white;
  min-width: 75px;
  font-size: medium;
`;
const Repositories = () => {
  const [token, setToken] = useState(null);
  const [repositories, setRepositories] = useState([
    { id: 1, name: "repository-no-1", issues: [1, 2, 3, 4, 5] },
    { id: 2, name: "repository-no-2", issues: [1, 2, 3, 4, 5] },
    { id: 3, name: "repository-no-3", issues: [1, 2, 3, 4, 5] },
  ]);

  const userLoginCode = window.location.href.match(/\?code=(.*)/)[1];

  useEffect(() => {
    axios
      .get("http://localhost:8000/authenticate/" + userLoginCode)
      .then((data) => {
        console.log("what is the token? ", data.data.token);
        setToken(data.data.token);
      });
  }, []);

  useEffect(() => {
    if (token === null) {
      return;
    }

    axios
      .get("https://api.github.com/user/repos", {
        headers: {
          Authorization: "token " + token,
          Accept: "application/vnd.github.v3+json",
        },
      })
      .then((data) => {
        console.log("did I get something? ", data);
        setRepositories(data.data);
      });
  }, [token]);

  return (
    <Container>
      <h2>Git Repositories</h2>
      <SearchContainer>
        <SearchBox defaultValue="find a repository..." />
        <NewButton>new</NewButton>
      </SearchContainer>

      {repositories.map((repo) => (
        <Repository key={repo.id} name={repo.name} />
      ))}

      <button onClick={() => console.log("token is ", token)}>
        Check token
      </button>
      <button onClick={() => console.log("repos are ", repositories)}>
        Check repos
      </button>
    </Container>
  );
};

export default Repositories;
