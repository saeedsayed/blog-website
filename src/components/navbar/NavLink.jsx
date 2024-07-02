"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({link, ...props}) => {
  const pathName = usePathname();
  return (
    <li>
      <Link
        href={link.href}
        className={`cursor-pointer px-4 py-2 rounded-full ${
          pathName == link.href ? "text-black font-bold bg-white" : ""
        }`}
        {...props}
      >
        {link.name}
      </Link>
    </li>
  );
};

export default NavLink;
