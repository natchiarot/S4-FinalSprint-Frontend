import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const LoggedInNav = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const logOut = () => {
    setToken(null);
    navigate("/users/signOut/success");
  };

  return (
    <nav className="btns-containerA">
      <Link to="/" className="btnA">
        Home
      </Link>
      <Link to="/resumes" className="btnA">
        Search
      </Link>
      <button className="btnA" onClick={logOut}>
        Log Out
      </button>
    </nav>
  );
};

export default LoggedInNav;
