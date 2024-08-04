import facebookLogo from "../images/FacebookLogo.png";
import instagramLogo from "../images/InstagramLogo.png";
import twitterLogo from "../images/TwitterLogo.png";
import youtubeLogo from "../images/YouTubeLogo.png";

const Footer = () => {
  return (
    <footer>
      <div class="footercontentA">
        <div class="social-links">
          <a href="https://www.facebook.com/" class="social-icon">
            <img src={facebookLogo} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/" class="social-icon">
            <img src={instagramLogo} alt="Instagram" />
          </a>
          <a href="https://twitter.com/home" class="social-icon">
            <img src={twitterLogo} alt="Twitter" />
          </a>
          <a href="https://www.youtube.com/" class="social-icon">
            <img src={youtubeLogo} alt="Youtube" />
          </a>
        </div>
        <div>
          <p class="footercontentB">
            &copy; 2024 - MIT License
            <br />
            <a
              href="https://github.com/laurenwilson27"
              target="_blank"
              rel="noreferrer"
            >
              Lauren Wilson
            </a>
            <a
              href="https://github.com/natchiarot"
              target="_blank"
              rel="noreferrer"
            >
              Nat Chiarot
            </a>
            <a
              href="https://github.com/mitchell-barkley"
              target="_blank"
              rel="noreferrer"
            >
              Mitchell Barkley
            </a>
          </p>
        </div>
        <div class="copyright">
          &trade; 2024 Money4Lifeforce Ltd. All rights are reserved.
        </div>
      </div>
      <div class="footercontentB">
        <div class="back-to-top">
          <a href="#top" id="backToTopBtn">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
