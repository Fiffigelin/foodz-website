export interface NavlistItem {
  title: string,
  href: string,
}

export type NavbarItemProps = {
  navlist: NavlistItem[];
}

function NavbarItem({navlist}: NavbarItemProps) {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
      {navlist.map((nav, index) => (
        <li
          key={index}
          className="text-(--navtext-primary) max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5"
        >
          <a
            className="text-lg font-bold md:text-base hover:text-(--navtext-hover) transition-colors"
            href={nav.href}
          >
            {nav.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavbarItem;