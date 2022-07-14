import Container from "@shared/Container";
import Link from "next/link";
import React, { useState } from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import useMediaQuery from "hooks/useMediaQuery";
import styles from "styles/module/menuIcon.module.scss";

const navLinks: { title: string; href: string }[] = [
  {
    title: "Learn",
    href: "/learn",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Sign In",
    href: "/signin",
  },
];

/**
 * The nav bar brand logo / home link
 * @returns
 */
const NavBrand = () => {
  return (
    <Link href={"/"}>
      <a className="header-brand ">Supaflash</a>
    </Link>
  );
};

/**
 * Other Nav links
 * @returns
 */
const NavLinks = () => {
  // when a nav link is active text-color is white
  const { pathname } = useRouter();

  return (
    <ul className="flex space-x-12 text-lg">
      {navLinks.map((navLink) => (
        <li key={navLink.title}>
          <Link href={navLink.href}>
            <a
              className={cn(
                "text-gray-500 hover:text-white transition-all duration-300",
                {
                  "text-white": pathname === navLink.href,
                }
              )}
            >
              {navLink.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

/**
 * Sidebar
 */
const Sidebar: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <div
      className={cn(
        "fixed md:hidden w-full h-screen bg-black-secondary z-[100] top-[80px] left-0",
        "translate-x-full transition-all duration-300",
        {
          "translate-x-0": open,
        }
      )}
    >
      <ul>
        {navLinks.map((navLink) => (
          <li
            key={navLink.title}
            className="py-6 text-center text-xl border-b border-gray-600 text-white"
          >
            <Link href={navLink.href}>
              <a>{navLink.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

/**
 * Menu Icon
 */
const MenuIcon: React.FC<{
  openSideBar: boolean;
  control: () => void;
}> = ({ openSideBar, control }) => {
  return (
    <div className={styles["menu-icon"]}>
      <input
        checked={openSideBar}
        onChange={control}
        className={styles["menu-icon__cheeckbox"]}
        type="checkbox"
      />
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

/**
 * Main Component - Navbar
 * @returns
 */
const Navbar = () => {
  const md = useMediaQuery("md");

  const [openSideBar, setOpenSidebar] = useState(false);
  const toggleSidebar = () => setOpenSidebar(!openSideBar);

  return (
    <nav className="h-[80px] border-b border-b-gray-500">
      <Container className="h-full flex items-center justify-between">
        <Sidebar open={openSideBar} />
        <NavBrand />
        {md ? (
          <NavLinks />
        ) : (
          <MenuIcon openSideBar={openSideBar} control={toggleSidebar} />
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
