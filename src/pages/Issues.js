import Issue from "./Issue";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getIssues } from "../shared/fetch-from-server";
import {
  Container,
  SearchBox,
  SearchContainer,
  AddNewButton,
} from "../shared/styles";

const Issues = () => {
  const { name, owner } = useParams();

  const [issues, setIssues] = useState([
    { id: 1, title: "issue-no-1" },
    { id: 2, title: "issue-no-2" },
  ]);

  const [displayedIssues, setDisplayedIssues] = useState(issues);

  useEffect(() => {
    getIssues(owner, name).then((data) => setIssues(data.data));
  }, []);

  useEffect(() => {
    if (issues) {
      setDisplayedIssues(issues);
    }
  }, [issues]);

  const filterIssuesByIssueName = (issueName) => {
    const filteredResults = issues.filter((issue) =>
      issue.title.toLowerCase().includes(issueName.toLowerCase())
    );

    setDisplayedIssues(filteredResults);
  };

  return (
    <Container>
      <h2>Issues</h2>
      <SearchContainer>
        <SearchBox
          defaultValue="find an issue..."
          onChange={({ target }) => filterIssuesByIssueName(target.value)}
        />
        <AddNewButton>new</AddNewButton>
      </SearchContainer>

      {displayedIssues.length > 0 ? (
        <div>
          {displayedIssues.map((issue) => (
            <Issue key={issue.id} name={issue.title} />
          ))}
        </div>
      ) : (
        <h2>Sorry, didn't find what you were looking for, try again!</h2>
      )}
    </Container>
  );
};

export default Issues;
