import "./header.style.css";
import Button from "../buttons/CTAbutton";
import ThemeToggle from "../buttons/Theme-Toggle";
import Navigations from "../navigations/Navigations"


const Header = () => {
  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="nav">
          <div className="logo">
            <a href="index.html" >MindfulPath</a>
          </div>
        </div>

        {/* Navigations */}
        <Navigations />

        {/* Theme Toggle + CTA */}
        <div className="header-actions">
          <ThemeToggle />

          <Button
            type="button"
            className="button button-nav header-cta rounded-full"
          >
            Book a Therapist
          </Button>
        </div>

        {/* Mobile Button */}
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label="Open main menu"
          aria-expanded="false"
          aria-controls="mobile-menu"
        >
          <span className="mobile-icon mobile-icon--open">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu-icon lucide-menu"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </span>
          <span className="mobile-icon mobile-icon--close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x-icon lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
