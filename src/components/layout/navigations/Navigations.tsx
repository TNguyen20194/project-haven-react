import { NavLink } from "react-router";

type Navigation = {
  title: string;
  href: string;
}[];

const navLinks: Navigation = [
  {
    title: "Learn",
    href: "learn",
  },
  {
    title: "Assessment",
    href: "assessment",
  },
];


const Navigations = () => {
    return (
         <div>
          <nav className="navigation rounded-full" aria-label="main navigation">
            {navLinks.map(({title, href}, index) => {
              return (
                <NavLink key={index} to={`/${href}`} className="nav-link rounded-full">
                  {title}
                </NavLink>
              );
            })}
          </nav>
        </div>
    )
};

export default Navigations;