import "./header.style.css"
import Button from "../buttons/CTAbutton";
import ThemeToggle from "../buttons/Theme-Toggle";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="nav">
          <div className="logo">
            <a href="index.html">MindfulPath</a>
          </div>
        </div>
        <div>
          <nav className="navigation rounded-full" aria-label="main navigation">
            <a className="rounded-full" href="#services">
              Services
            </a>
            <a className="rounded-full" href="#about">
              About
            </a>
            <a className="rounded-full clientLoginTab" href="dashboard.html">
              Client Login
            </a>
          </nav>
        </div>
        <div className="header-actions">
          <ThemeToggle />
          <button
            className="button button-nav header-cta rounded-full"
            type="button"
          >
            Book a Session
          </button>
        </div>
        <Button />

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
