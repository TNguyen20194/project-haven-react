import { useEffect, useState } from "react";
import "./header.style.css";
import Button from "../../UI/buttons/CTAbutton";
import ThemeToggle from "../../UI/buttons/ThemeToggle";
import Navigations from "../navigations/Navigations";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const MOBILE_MAX = 620;

    const syncMenuWithViewport = () => {
      const isMobile = window.innerWidth <= MOBILE_MAX;

      if (!isMobile) setIsOpen(false);
    };

    syncMenuWithViewport();

    window.addEventListener("resize", syncMenuWithViewport);
    return () => window.removeEventListener("resize", syncMenuWithViewport);
  }, []);

  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="nav">
          <div className="logo">
            <a href="index.html">MindfulPath</a>
          </div>
        </div>

        {/* Navigations */}
        <Navigations />

        {/* Theme Toggle + CTA */}
        <div className="header-actions">
          <ThemeToggle />

          <Button type="button" variant="primary" size="md">
            Book a Therapist
          </Button>
        </div>

        {/* Mobile Button */}
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label="Open main menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {/* Open icon */}
          <span className={`mobile-icon ${isOpen ? "is-hidden" : ""}`}>
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
          {/* Close icon */}
          <span className={`mobile-icon ${isOpen ? "" : "is-hidden"}`}>
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

      {/* Mobile Dropdown Menu */}
      {isOpen && window.innerWidth <= 620 && (
        <div className="mobile-menu">
          <nav className="mobile-menu-links">
            <a href="/learn" onClick={() => setIsOpen(false)}>
              Learn
            </a>
            <a href="/assessment" onClick={() => setIsOpen(false)}>
              Assessment
            </a>
          </nav>

          <div className="mobile-menu-row">
            <span className="mobile-menu-label">Theme</span>
            <ThemeToggle />
          </div>

          <div className="mobile-menu-cta">
            <Button type="button" variant="primary" size="md">
              Book a Therapist
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
