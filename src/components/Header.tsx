import { NavLink, Link } from "react-router";

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
          <button
            id="themeToggle"
            className="theme-toggle rounded-full"
            type="button"
          >
            {/* Light Icon */}
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
              className="lucide lucide-sun h-5 w-5 theme-icon theme-icon--sun"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
            {/* Dark Icon */}
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
              className="lucide lucide-moon h-5 w-5 theme-icon theme-icon--moon"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          </button>
          <button
            className="button button-nav header-cta rounded-full"
            type="button"
          >
            Book a Session
          </button>
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
