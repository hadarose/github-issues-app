import { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Wrapper,
  NavLink,
  RepoFooter,
  Footer,
  LanguageItem,
  YellowCircle,
  BlueCircle,
} from "../shared/styles";

const Repository = ({ name, owner, description, language, updated }) => {
  const [displayIssues, setDisplayIssues] = useState(false);
  return (
    <Wrapper>
      <NavLink to={`/repositories/${name}`}>{name}</NavLink>
      <div>
        <p>{description ? description : "No description available"}</p>
        {displayIssues && (
          <Redirect to={`/repositories/${owner}/${name}/issues`} />
        )}
        <RepoFooter>
          <Footer>
            <LanguageItem>
              <YellowCircle />
              <p>{language || "N/A"}</p>
            </LanguageItem>
            <BlueCircle />
            <div>
              <i>Last updated: </i> {updated}
            </div>
          </Footer>

          <button onClick={() => setDisplayIssues(!displayIssues)}>
            Issues
          </button>
        </RepoFooter>
      </div>
    </Wrapper>
  );
};

export default Repository;
