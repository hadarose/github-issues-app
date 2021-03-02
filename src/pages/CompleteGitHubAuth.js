import Repositories from "./Repositories";

const HandleCode = () => {
  const userLoginCode = window.location.href.split("=")[1];
  return <Repositories code={userLoginCode} />;
};

export default HandleCode;
