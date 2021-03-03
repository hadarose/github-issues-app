import Repository from "./Repository";
import { useState, useEffect } from "react";
import { getRepositories } from "../shared/fetch-from-server";
import Search from "../shared/Search";
import { Container } from "../shared/styles";

const Repositories = () => {
  const token = localStorage.getItem("token");
  const [repositories, setRepositories] = useState([]);

  const [displayedRepos, setDisplayedRepos] = useState(repositories);

  useEffect(() => {
    getRepositories(token).then((data) => {
      setRepositories(data.data);
      setDisplayedRepos(data.data);
    });
  }, [token]);

  const filterReposByRepoName = (repoName) => {
    const filteredResults = repositories.filter((repo) =>
      repo.name.toLowerCase().includes(repoName.toLowerCase())
    );

    setDisplayedRepos(filteredResults);
  };

  return (
    <Container>
      <h2>Git Repositories</h2>

      <Search
        placeholder="find a repository..."
        onSearch={filterReposByRepoName}
      />

      {displayedRepos.length > 0 ? (
        <div>
          {displayedRepos.map((repo) => (
            <Repository
              key={repo.id}
              name={repo.name}
              owner={repo.owner.login}
              description={repo.description}
              language={repo.language}
              updated={repo.updated_at.substr(0, 10)}
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
