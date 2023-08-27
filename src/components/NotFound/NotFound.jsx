import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <h2>Ups! Nothing here...</h2>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </div>
  );
};

export default NotFound;