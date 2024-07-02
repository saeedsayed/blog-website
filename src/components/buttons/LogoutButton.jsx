"use client";
import React from "react";
import Button from "./Button";
import { signOut } from "next-auth/react";

const LogoutButton = ({ children }) => {
  return (
    <Button
      variant={"danger"}
      type={"button"}
      onClick={() => {
        signOut({ callbackUrl: "/" });
        console.log("logout is done");
      }}
    >
      {children}
    </Button>
  );
};

export default LogoutButton;
