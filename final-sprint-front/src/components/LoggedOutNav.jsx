import { Link } from "react-router-dom";

const LoggedOutNav = () => {
  return (
    <nav className="btns-containerA">
      <Link to="/" className="btnA">
        Home
      </Link>
      <Link to="/users/signUp" className="btnA">
        Sign Up
      </Link>
      <Link to="/users/signIn" className="btnA">
        Sign In
      </Link>
    </nav>
  );
};

export default LoggedOutNav;
