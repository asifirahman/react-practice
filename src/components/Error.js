import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>You have hit a wrong url</h2>
      <h2>Here is the detailed error:{error}</h2>
    </div>
  );
};

export default Error;
