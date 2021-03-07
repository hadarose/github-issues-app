import { Route } from "react-router-dom";
import Repositories from "./Repositories";

const PrivateRoute = ({ isUser, setUser, ...rest }) => {
  if (isUser) {
    return (
      <Route {...rest}>
        <Repositories />
      </Route>
    );
  }
  return null;
};

export default PrivateRoute;
