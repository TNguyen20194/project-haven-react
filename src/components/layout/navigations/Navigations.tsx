import { NavLink } from "react-router";
import { NAV_LINK } from "@/config/navigation";

const Navigations = () => {
  return (
    <div>
      <nav className="navigation rounded-full" aria-label="main navigation">
        {NAV_LINK.map(({ title, href, end }) => {
          return (
            <NavLink
              key={href}
              to={href}
              end={end}
              className={({isActive}) => `nav-link rounded-full transition-colors duration-200 ease-in-out ${isActive ? "!text-[hsl(var(--coral))] !bg-[hsl(var(--soft-white))] shadow-sm": ""}`}
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

