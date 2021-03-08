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

export const Wrapper = styled.div`
  margin: 5px;
  padding: 5px;
  min-height: 100px;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    background-color: #d1d5da;
  }
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

export const MainHeadline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RepoFooter = styled.div`
  display: flex;
  flex-firection: column;
  justify-content: space-between;
`;

export const Footer = styled.div`
  display: flex;
  flex-firection: column;
  justify-content: space-between;
  align-items: center;
`;

export const LanguageItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100px;
  margin-right: 10px;
`;
export const Circle = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin-right: 5px;
`;

export const YellowCircle = styled(Circle)`
  background-color: #f1e05a;
`;

export const BlueCircle = styled(Circle)`
  background-color: #2b7489;
`;
