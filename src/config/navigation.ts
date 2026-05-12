export type NavItem = {
    title: string,
    href: string,
    end?: boolean
};

export const NAV_LINK:NavItem[] = [
    { title: "Home", href: "/"},
    { title: "Learn", href: "/learn"},
    { title: "About", href: "/about"},
    { title: "Assessment", href: "/assessment"},
];