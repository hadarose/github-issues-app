import { SearchBox, SearchContainer } from "./styles";

const Search = ({ placeholder, onSearch }) => (
  <SearchContainer>
    <SearchBox
      placeholder={placeholder}
      onChange={({ target }) => onSearch(target.value)}
    />
  </SearchContainer>
);

export default Search;
