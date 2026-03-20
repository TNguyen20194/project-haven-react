import { NavLink, useLocation } from "react-router-dom";
import { NAV_LINK } from "@/config/navigation";

type NavigationsProps = {
  onAssessmentClick: () => void;
};

const Navigations = ({ onAssessmentClick }: NavigationsProps) => {
  const location = useLocation();

  return (
    <div>
      <nav className="navigation rounded-full" aria-label="main navigation">
        {NAV_LINK.map(({ title, href, end }) => {
          const isAsessmentActive =
            href === "/assessment" &&
            (location.pathname === "/assessment" ||
              location.pathname === "/assessment/results");

          const activeClass = isAsessmentActive
            ? "!text-[hsl(var(--coral))] !bg-[hsl(var(--soft-white))] shadow-sm"
            : "";

          if (href === "/assessment") {
            return (
              <button
                key={title}
                type="button"
                onClick={onAssessmentClick}
                className={`nav-link rounded-full transition-colors duration-200 ease-in-out ${activeClass}`}
              >
                {title}
              </button>
            );
          }

          return (
            <NavLink
              key={title}
              to={href}
              end={end}
              className={({ isActive }) =>
                `nav-link rounded-full transition-colors duration-200 ease-in-out ${
                  isActive
                    ? "!text-[hsl(var(--coral))] !bg-[hsl(var(--soft-white))] shadow-sm"
                    : ""
                }`
              }
            >
              {title}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Navigations;
