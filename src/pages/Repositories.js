import Repository from "./Repository";
import { useState, useEffect } from "react";
import { getRepositories } from "../shared/fetch-from-server";
import {
  Container,
  SearchContainer,
  SearchBox,
  AddNewButton,
} from "../shared/styles";

const Repositories = () => {
  const [token] = useState(localStorage.getItem("token"));
  const [repositories, setRepositories] = useState([
    {
      id: 1,
      name: "repository-no-1",
      owner: "",
    },
    {
      id: 2,
      name: "repository-no-2",
      owner: "",
    },
    {
      id: 3,
      name: "repository-no-3",
      owner: "",
    },
  ]);

  const [displayedRepos, setDisplayedRepos] = useState(repositories);

  useEffect(() => {
    if (token === null) {
      return;
    }
    getRepositories(token).then((data) => setRepositories(data.data));
  }, [token]);

  useEffect(() => {
    if (repositories) {
      setDisplayedRepos(repositories);
    }
  }, [repositories]);

  const filterReposByRepoName = (repoName) => {
    const filteredResults = repositories.filter((repo) =>
      repo.name.toLowerCase().includes(repoName.toLowerCase())
    );

    setDisplayedRepos(filteredResults);
  };

  return (
    <Container>
      <h2>Git Repositories</h2>
      <SearchContainer>
        <SearchBox
          defaultValue="find a repository..."
          onChange={({ target }) => filterReposByRepoName(target.value)}
        />
        <AddNewButton>new</AddNewButton>
      </SearchContainer>

      {displayedRepos.length > 0 ? (
        <div>
          {displayedRepos.map((repo) => (
            <Repository
              key={repo.id}
              name={repo.name}
              owner={repo.owner.login}
            />
          ))}
        </div>
      ) : (
        <h2>Sorry, didn't find what you were looking for, try again!</h2>
      )}
    </Container>
  );
};

export default Repositories;
