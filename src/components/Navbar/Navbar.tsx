"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BurgerIcon, CloseIcon } from "../../utils/icons";
import Logo from "./Logo";

const navItems = [
  {
    label: "_home",
    href: "/",
  },
  {
    label: "_skills",
    href: "/#skills",
  },
  {
    label: "_projects",
    href: "/#projects",
  },
  {
    label: "_expertise",
    href: "/#expertise",
  },
  {
    label: "_experience",
    href: "/#experience",
  },
  {
    label: "_education",
    href: "/#education",
  },
  {
    label: "_contact",
    href: "/#contact",
  },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-border h-16 border-b">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-4 py-1 md:px-6">
        <Link href="/" aria-label="Home">
          <div className="animate-fade-up text-primary-content relative flex items-center gap-3 transition-all duration-300 md:static">
            <Logo />
            <span className="text-primary-content text-base font-semibold">
              sahil_khadtare
            </span>
          </div>
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isVisible ? (
              <CloseIcon className="text-primary-content" />
            ) : (
              <BurgerIcon className="text-primary-content" />
            )}
          </button>
        </div>

        <ul
          className={`${isVisible ? "flex" : "hidden"} animate-fade-in bg-primary absolute top-16 left-0 z-40 h-[calc(100dvh-64px)] w-full flex-col items-center gap-2 border-b border-border md:static md:top-0 md:z-auto md:flex md:h-full md:w-auto md:flex-row md:items-center md:gap-2 md:border-none`}
        >
          {navItems.map(({ label, href }) => (
            <li
              key={href}
              onClick={() => setIsVisible(false)}
              className="border-border flex w-full items-center justify-center border-b px-4 text-xl md:w-auto md:border-y-0 md:border-e md:px-3 md:text-base md:first:border-s md:last:ml-auto md:last:border-none md:last:px-0 lg:px-6"
            >
              <Link
                href={href}
                className={`text-primary-content hover:text-neutral w-full py-3 text-center transition-all duration-150 md:py-2 ${pathname === href ? "text-neutral cursor-text" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
