import { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import CompleteGitHubAuth from "./pages/CompleteGitHubAuth";
import Repositories from "./pages/Repositories";
import Issues from "./pages/Issues";
import Description from "./pages/Description";
import GithubIcon from "mdi-react/GithubIcon";
import { APP_CLIENT_ID } from "./shared/client-id";
import { MainHeadline } from "./shared/styles";

function App() {
  const [isUser, setIsUser] = useState(Boolean(localStorage.getItem("token")));

  const logIn = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${APP_CLIENT_ID}`
    );
  };

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.assign("/");
  };

  const setUser = () => {
    setIsUser(!isUser);
  };

  return (
    <BrowserRouter>
      <MainHeadline>
        <GithubIcon />
        <h1>Git Issues App</h1>
        {isUser ? (
          <button onClick={logOut}>Log Out</button>
        ) : (
          <button onClick={logIn}>Log In</button>
        )}
      </MainHeadline>

      {isUser ? (
        <Switch>
          <Route path="/repositories/:owner/:name/issues" component={Issues} />
          <Route path="/repositories/:name" component={Description} />
          <Route path="/repositories" component={Repositories} />
          <Route path="/" component={Repositories} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/code">
            <CompleteGitHubAuth setUser={setUser} />
          </Route>
        </Switch>
      )}
    </BrowserRouter>
  );
}

export default App;
