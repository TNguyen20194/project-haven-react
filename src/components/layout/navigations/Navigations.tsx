import { NavLink } from "react-router";

type NavItem = {
  title: string;
  href: string;
}[];

const navLinks: NavItem = [
  {
    title: "Learn",
    href: "/learn",
  },
  {
    title: "Assessment",
    href: "/assessment",
  },
];

const Navigations = () => {
  return (
    <div>
      <nav className="navigation rounded-full" aria-label="main navigation">
        {navLinks.map(({ title, href }) => {
          return (
            <NavLink
              key={href}
              to={href}
              end
              className={({isActive}) => `nav-link rounded-full transition-colors duration-300 ease-in-out ${isActive ? "!text-[hsl(var(--coral))] !bg-[hsl(var(--soft-white))] shadow-sm": ""}`}
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

