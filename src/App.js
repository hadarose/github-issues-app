import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import CompleteGitHubAuth from "./pages/CompleteGitHubAuth";
import Repositories from "./pages/Repositories";
import Issues from "./pages/Issues";
import Description from "./pages/Description";
import { MainHeadline } from "./shared/styles";
import GithubIcon from "mdi-react/GithubIcon";
import { APP_CLIENT_ID } from "./shared/client-id";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const [isUser, setIsUser] = useState(Boolean(localStorage.getItem("token")));

  const login = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${APP_CLIENT_ID}`
    );
  };

  // if (isUser) {
  //   window.location.assign("/repositories");
  // }

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.assign("/");
  };

  const setUser = () => {
    setIsUser(!isUser);
  };

  return (
    <BrowserRouter>
      <div>
        <MainHeadline>
          <GithubIcon />
          <h1>Git Issues App</h1>
        </MainHeadline>
        {isUser ? (
          <button onClick={logOut}>Log Out</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
        <Switch>
          <PrivateRoute exact path="/" isUser={isUser} />
          <Route path="/code">
            <CompleteGitHubAuth setUser={setUser} />
          </Route>
          <Route path="/repositories/:owner/:name/issues" component={Issues} />
          <Route path="/repositories/:name" component={Description} />
          <PrivateRoute path="/repositories" isUser={isUser} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
