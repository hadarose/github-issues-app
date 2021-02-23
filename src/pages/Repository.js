import { Link } from "react-router-dom";
import styled from "styled-components";

const RepoWrapper = styled.div`
  margin: 5px;
  padding: 5px;
  min-height: 100px;
  border-bottom: 1px solid gray;
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
const Repository = ({ name }) => {
  return (
    <RepoWrapper>
      <NavLink to={`/repositories/${name}`}>{name}</NavLink>
    </RepoWrapper>
  );
};

export default Repository;
