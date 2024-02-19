import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>
        If it is trouble your looking for check the door
        <br /> 404 Page not found <Link to="/">Back to home</Link>
      </h1>
    </div>
  );
};

export default NotFound;
