"use client";
import Link from "next/link";
import React, { useState, FC } from "react";
import Hamburger from "hamburger-react";
import { BiLogoDiscordAlt, BiLogoGithub } from "react-icons/bi";

import NavLinks from "./NavLinks";
import { cn } from "@/utils/client-utils";
import Logo from "@/assets/icons/Logo";
import ThemeSwitch from "../../ThemeSwitch";
import MaxWidthWrapper from "../../MaxWidthWrapper";

const Navbar: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="fixed left-0 top-0 z-50 w-full border-none dark:border-b py-0 border-white/5 bg-white/80 shadow shadow-gray-300/20 backdrop-blur-md transition dark:bg-dark/80 dark:shadow-xl dark:shadow-black/20 print:hidden">
      <MaxWidthWrapper className="py-2">
        <header className="flex justify-between items-center">
          <Link href="/" onClick={() => setOpen(false)}>
            <Logo />
          </Link>
          <nav>
            <NavLinks className="hidden md:flex" />
          </nav>
          <div className="flex items-center gap-2">
            <Link
              className="hidden md:block"
              href="https://discord.gg"
              target="_blank"
            >
              <BiLogoDiscordAlt size={20} />
            </Link>
            <Link
              className="hidden md:block"
              href="https://github.com"
              target="_blank"
            >
              <BiLogoGithub size={20} />
            </Link>
            <ThemeSwitch />
            <div className="block md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
          {/* Navbar dropdown links for small screens */}
          <div
            className={cn(
              "md:hidden px-8 fixed w-full top-[64px] right-0 border-b border-white/5 bg-white/80 shadow shadow-gray-300/20 backdrop-blur-xl transition dark:bg-dark/80 dark:shadow-xl dark:shadow-black/20 print:hidden py-4",
              isOpen ? "block" : "hidden"
            )}
          >
            <NavLinks closeMenu={() => setOpen(false)} />
          </div>
        </header>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
