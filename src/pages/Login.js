import { APP_CLIENT_ID } from "../shared/client-id";
import { Row } from "../shared/styles";

const Login = () => {
  return (
    <div>
      <h2>Login Page</h2>

      <Row>
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${APP_CLIENT_ID}`}
        >
          Login to Github
        </a>
      </Row>
    </div>
  );
};

export default Login;
