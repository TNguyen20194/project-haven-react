export type NavItem = {
    title: string,
    href: string,
    end?: boolean
};

export const NAV_LINK:NavItem[] = [
    { title: "Learn", href: "/learn"},
    { title: "Assessment", href: "/assessment"},
];