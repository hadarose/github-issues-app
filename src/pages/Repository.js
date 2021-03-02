import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Wrapper, NavLink } from "../shared/styles";

const Repository = ({ name, owner }) => {
  const [displayIssues, setDisplayIssues] = useState(false);

  return (
    <Wrapper>
      <NavLink to={`/repositories/${name}`}>{name}</NavLink>
      <div>
        {displayIssues ? (
          <Redirect to={`/repositories/${owner}/${name}/issues`} />
        ) : (
          ""
        )}
        <button onClick={() => setDisplayIssues(!displayIssues)}>Issues</button>
      </div>
    </Wrapper>
  );
};

export default Repository;
