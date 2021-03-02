import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 50px;
`;

export const SearchBox = styled.input`
  flex: 1;
  margin-right: 10px;
  border-radius: 5px;
  border: 0.75px solid gray;
  padding: 20px;
`;

export const AddNewButton = styled.button`
  background-color: green;
  color: white;
  min-width: 75px;
  font-size: medium;
`;

export const Wrapper = styled.div`
  margin: 5px;
  padding: 5px;
  min-height: 100px;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  color: blue;
  font-size: larger;
  text-decoration: none;
  font-weight: bolder;
  &:hover {
    text-decoration: underline;
  }
`;
