import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import CompleteGitHubAuth from "./pages/CompleteGitHubAuth";
import Repositories from "./pages/Repositories";
import Issues from "./pages/Issues";
import Description from "./pages/Description";
import { LogOut, MainHeadline } from "./shared/styles";
import GithubIcon from "mdi-react/GithubIcon";

function App() {
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.assign("/");
  };

  return (
    <BrowserRouter>
      <div>
        <MainHeadline>
          <GithubIcon />
          <h1>Git Issues App</h1>
          <LogOut onClick={logOut}>Log Out</LogOut>
        </MainHeadline>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/code" component={CompleteGitHubAuth} />
          <Route path="/repositories/:owner/:name/issues" component={Issues} />
          <Route path="/repositories/:name" component={Description} />
          <Route path="/repositories" component={Repositories} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
