export enum NavPaths {
    MAIN = "main",
    ABOUT = "about",
    CASES = "cases",
    CONTACTS = "contacts",
}

export const navigation: { key: string; href: string; title: string }[] = [
    {
        key: NavPaths.ABOUT,
        href: "#" + NavPaths.ABOUT,
        title: "О компании",
    },
    {
        key: NavPaths.CASES,
        href: "#" + NavPaths.CASES,
        title: "Кейсы",
    },
    {
        key: NavPaths.CONTACTS,
        href: "#" + NavPaths.CONTACTS,
        title: "Контакты",
    },
];
