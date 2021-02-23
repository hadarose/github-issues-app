import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Repositories from "./pages/Repositories";
import Issues from "./pages/Issues";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1 className="mainTitle">Git Issues App</h1>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/repositories/:name" component={Issues} />
          <Route path="/repositories" component={Repositories} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
