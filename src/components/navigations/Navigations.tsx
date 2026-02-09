type Navigation = {
  title: string;
  href: string;
}[];

const navLinks: Navigation = [
  {
    title: "Learn",
    href: "#",
  },
  {
    title: "Assessment",
    href: "#",
  },
];


const Navigations = () => {
    return (
         <div>
          <nav className="navigation rounded-full" aria-label="main navigation">
            {navLinks.map((nav, index) => {
              return (
                <a
                  key={index}
                  href={nav.href}
                  className="navigation rounded-full"
                >
                  {nav.title}
                </a>
              );
            })}
          </nav>
        </div>
    )
};

export default Navigations;