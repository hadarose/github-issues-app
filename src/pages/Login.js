import { Link } from "react-router-dom";
import GithubIcon from "mdi-react/GithubIcon";
import { APP_CLIENT_ID } from "../shared/client-id";

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${APP_CLIENT_ID}`}
        >
          Login to Github
        </a>
        <GithubIcon />
      </div>
    </div>
  );
};

export default Login;
