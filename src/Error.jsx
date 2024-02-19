import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>There is nothing here</h2>
      <p>{error.statusText || error?.message}</p>
      <Link to="/" className="">
        Go back to home page
      </Link>
    </div>
  );
};

export default Error;
