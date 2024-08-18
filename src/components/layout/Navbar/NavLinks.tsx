import React, { FC } from "react";
import Link from "next/link";
import { cn } from "@/utils/client-utils";
import { HiCollection, HiMailOpen, HiDocumentText, HiBriefcase } from "react-icons/hi";
import { usePathname } from "next/navigation";

export const getNavigationLinks = (): {
  label: string | React.JSX.Element;
  href: string;
  icon: (isActiveLink: boolean) => React.JSX.Element;
}[] => {
  return [
    {
      label: "Projects",
      icon: (isActiveLink: boolean) => (
        <HiBriefcase
          className={cn(
            `duration-150 group-hover:text-purple-500 w-5 h-5`,
            isActiveLink ? "text-purple-500" : ""
          )} size={20}
        />
      ),
      href: "/projects",
    },
    {
      label: "Articles",
      icon: (isActiveLink: boolean) => (
        <HiCollection
          className={cn(
            `duration-150 group-hover:text-purple-500 w-5 h-5`,
            isActiveLink ? "text-purple-500" : ""
          )} size={20}
        />
      ),
      href: "/articles",
    },
    {
      label: "Uses",
      icon: (isActiveLink: boolean) => (
        <HiDocumentText
          className={cn(
            `duration-150 group-hover:text-purple-500 w-5 h-5`,
            isActiveLink ? "text-purple-500" : ""
          )} size={20}
        />
      ),
      href: "/uses",
    },
    {
      label: "Contact",
      icon: (isActiveLink: boolean) => (
        <HiMailOpen
          className={cn(
            `duration-150 group-hover:text-purple-500 w-5 h-5`,
            isActiveLink ? "text-purple-500" : ""
          )} size={20}
        />
      ),
      href: "/contact",
    },
  ];
};

interface INavLinksProps {
  className?: string;
  closeMenu?: Function;
}

const NavLinks: FC<INavLinksProps> = ({ className, closeMenu }) => {
  const pathname = usePathname();
  const closeHandler = () => {
    if (closeMenu) {
      closeMenu();
    }
    return;
  };
  const navLinks = getNavigationLinks();
  return (
    <ul className={cn("flex flex-col md:flex-row gap-2", className)}>
      {navLinks?.map(({ href, label, icon }) => {
        const isActiveLink = new RegExp(`^${href}(\\/.*)?$`).test(pathname);
        return <li key={href} onClick={closeHandler}>
          <Link
            className="text-xl md:text-sm group flex items-center gap-2 py-1 px-1.5 lg:px-2.5"
            href={href}
          >
            {icon(isActiveLink)}
            {label}
          </Link>
        </li>
      })}
    </ul>
  );
};

export default NavLinks;
