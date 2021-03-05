import { Wrapper } from "../shared/styles";

const Issue = ({ name, opened, user }) => {
  return (
    <Wrapper>
      <h2>{name}</h2>
      <div>
        <i>Opened on </i> {opened} by {user}
      </div>
    </Wrapper>
  );
};

export default Issue;
