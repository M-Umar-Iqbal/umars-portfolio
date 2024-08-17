import React, { FC } from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

import MaxWidthWrapper from "../MaxWidthWrapper";

const Footer: FC = () => {
  return (
    <MaxWidthWrapper className="flex items-center justify-between mt-16 md:mt-0 pb-[10px] text-sm md:text-md text-zinc-500">
      <p>All rights reserved © Umar Iqbal {new Date().getFullYear()}</p>
      <div className="hidden md:flex gap-4">
        <Link
          href="https://www.instagram.com"
          target="_blank"
          className="flex items-center gap-2 dark:hover:text-white hover:text-black duration-300"
        >
          <GoArrowUpRight />
          follow me
        </Link>
        <Link
          href="mailto:umar.iqbal.biz@gmail.com"
          className="flex items-center gap-2 dark:hover:text-white hover:text-black duration-300"
        >
          <GoArrowUpRight />
          email me
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default Footer;
