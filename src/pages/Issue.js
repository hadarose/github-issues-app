import { Link } from "react-router-dom";
import styled from "styled-components";

const RepoWrapper = styled.div`
  margin: 5px;
  padding: 5px;
  min-height: 100px;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  color: blue;
  font-size: larger;
  text-decoration: none;
  font-weight: bolder;
  &:hover {
    text-decoration: underline;
  }
`;

const IssuesButton = styled.button``;
const Repository = ({ name }) => {
  return (
    <RepoWrapper>
      <NavLink to={`/repositories/${name}`}>{name}</NavLink>
      <div>
        <IssuesButton
          onClick={() => (window.location.href = `/repositories/${name}`)}
        >
          Repository's Issues
        </IssuesButton>
      </div>
    </RepoWrapper>
  );
};

export default Repository;
