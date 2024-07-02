import Link from "next/link";
import NavLink from "./NavLink";
import Button from "../buttons/Button";
import { signOut } from "next-auth/react";
import { getServerSession } from "next-auth";
import { auth, authOptions } from "@/lib/nextAuth";
import SmallDeviceNav from "./SmallDeviceNav";
import LogoutButton from "../buttons/LogoutButton";

const LINKS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const Navbar = async () => {
  const session = await auth();
  const isLogedIn = !!session;
  const isAdmin = true;

  return (
    <nav className="py-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">
        <Link href="/">logo</Link>
      </h1>
      <div>
        <ul className="sm:flex items-center gap-4 hidden">
          {LINKS.map((link) => (
            <NavLink key={link.name} link={link} />
          ))}
          {isLogedIn ? (
            <>
              {isAdmin && (
                <NavLink
                  link={{
                    name: "Admin",
                    href: "/admin",
                  }}
                />
              )}
              <li>
                <LogoutButton>Log out {session.user.name}</LogoutButton>
              </li>
            </>
          ) : (
            <li>
              <Button href="/login" variant={"primary"}>
                Log in
              </Button>
            </li>
          )}
        </ul>
      </div>
      {/* Small device nav */}
      <SmallDeviceNav LINKS={LINKS} />
    </nav>
  );
};

export default Navbar;
