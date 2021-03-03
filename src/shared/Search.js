import { AddNewButton, SearchBox, SearchContainer } from "./styles";

const Search = ({ placeholder, onSearch }) => (
  <SearchContainer>
    <SearchBox
      placeholder={placeholder}
      onChange={({ target }) => onSearch(target.value)}
    />
    <AddNewButton>new</AddNewButton>
  </SearchContainer>
);

export default Search;
