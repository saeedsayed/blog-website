"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import NavLink from "./NavLink";
import Button from "../buttons/Button";
import LogoutButton from "../buttons/LogoutButton";

const SmallDeviceNav = ({ LINKS, session, isLogedIn, isAdmin }) => {
  const [open, setOpen] = useState(false);
  const closeNavHandler = () => setOpen(false);
  const openNavHandler = () => setOpen(true);
  return (
    <>
      {" "}
      <button className="sm:hidden p-2 text-xl" onClick={openNavHandler}>
        <FaBars />
      </button>
      {open && (
        <div
          className="sm:hidden fixed top-0 left-0 w-full h-screen flex z-10"
          onClick={closeNavHandler}
        >
          <ul
            className={`py-14 px-8 bg-midnight h-full flex relative flex-col gap-4 min-w-[300px]`}
            onClick={(e) => e.stopPropagation()}
          >
            {LINKS.map((link) => (
              <NavLink key={link.name} link={link} onClick={closeNavHandler} />
            ))}
            {isLogedIn ? (
              <>
                {isAdmin && (
                  <NavLink
                    link={{
                      name: "Admin",
                      href: "/admin",
                    }}
                    onClick={closeNavHandler}
                  />
                )}
                <li>
                  <LogoutButton>Log out</LogoutButton>
                </li>
              </>
            ) : (
              <li>
                <Button variant={"primary"}>Log in</Button>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default SmallDeviceNav;
