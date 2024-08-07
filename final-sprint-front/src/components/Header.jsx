import LoggedOutNav from "./LoggedOutNav";

const Header = () => {
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
              {/* Navigation based on location and user */}
              <LoggedOutNav />
            </div>
          </div>
        </div>
        <div className="user-section">
          <div className="welcome-message">{/* Username / login link */}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
