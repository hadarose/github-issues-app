import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import CompleteGitHubAuth from "./pages/CompleteGitHubAuth";
import Repositories from "./pages/Repositories";
import Issues from "./pages/Issues";
import Description from "./pages/Description";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1 className="mainTitle">Git Issues App</h1>

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
