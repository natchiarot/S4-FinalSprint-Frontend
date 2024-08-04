import LoggedOutNav from "./LoggedOutNav";

const Header = () => {
  return (
    <header>
      <div class="header-container">
        <div class="header">
          <div class="titleblock">
            <h1 class="website-name">PrecisionHire Pro</h1>
            <blockquote class="slogan">
              “Welcome to efficient hiring!”
            </blockquote>
          </div>
          <div class="btns-containerAnB">
            <div class="btns-containerA">
              {/* Navigation based on location and user */}
              <LoggedOutNav />
            </div>
          </div>
        </div>
        <div class="user-section">
          <div class="welcome-message">{/* Username / login link */}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
