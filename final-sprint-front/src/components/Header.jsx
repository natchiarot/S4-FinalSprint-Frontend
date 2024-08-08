import LoggedOutNav from "./LoggedOutNav";
import LoggedInNav from "./LoggedInNav";
import UserPanel from "./UserPanel";
import { useAuth } from "../providers/AuthProvider";

const Header = () => {
  const { token } = useAuth();

  return (
    <header>
      <div className="header-container">
        <div className="header">
          <div className="titleblock">
            <h1 className="website-name">PrecisionHire Pro</h1>
            <blockquote className="slogan">
              “Welcome to efficient hiring!”
            </blockquote>
          </div>
          <div className="btns-containerAnB">
            <div className="btns-containerA">
              {token ? <LoggedInNav /> : <LoggedOutNav />}
            </div>
          </div>
        </div>
        <UserPanel />
      </div>
    </header>
  );
};

export default Header;
