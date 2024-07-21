"use client";
import { useState } from "react";
import Button from "./Button";
import { signOut } from "next-auth/react";
import Spinner from "../loading/Spinner";

const LogoutButton = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const handleSignOut = async () => {
    setLoading(true);
    await signOut({ callbackUrl: "/" });
  };
  return (
    <Button
      variant={"danger"}
      type={"button"}
      onClick={handleSignOut}
    >
      {children} {loading && <span className="w-6 ms-2"><Spinner /></span> }
    </Button>
  );
};

export default LogoutButton;
