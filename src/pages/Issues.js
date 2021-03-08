import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getIssues } from "../shared/fetch-from-server";
import Search from "../shared/Search";
import Issue from "./Issue";
import { Container } from "../shared/styles";

const Issues = () => {
  const { name, owner } = useParams();
  const [issues, setIssues] = useState([]);
  const [displayedIssues, setDisplayedIssues] = useState(issues);

  useEffect(() => {
    getIssues(owner, name).then((data) => {
      setIssues(data.data);
      setDisplayedIssues(data.data);
    });
  }, [name, owner]);

  const filterIssuesByIssueName = (issueName) => {
    const filteredResults = issues.filter((issue) =>
      issue.title.toLowerCase().includes(issueName.toLowerCase())
    );

    setDisplayedIssues(filteredResults);
  };

  return (
    <Container>
      <h2>Issues</h2>
      <Search
        placeholder="find an issue..."
        onSearch={filterIssuesByIssueName}
      />

      {displayedIssues.length > 0 ? (
        <div>
          {displayedIssues.map((issue) => (
            <Issue
              key={issue.id}
              name={issue.title}
              opened={issue.created_at.substr(0, 10)}
              user={issue.user.login}
            />
          ))}
        </div>
      ) : (
        <h2>Sorry, didn't find what you were looking for, try again!</h2>
      )}
    </Container>
  );
};

export default Issues;
