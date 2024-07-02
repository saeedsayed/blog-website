"use client";
import React from "react";
import Button from "./Button";
import { signIn } from "next-auth/react";

const LoginButton = ({ provider, children }) => {
  const logInHandler = (_) => {
    signIn(provider, { redirect: true, callbackUrl: "/admin" });
  };
  return (
    <Button variant={"primary"} type={"button"} onClick={logInHandler} title={`log in with ${provider}`}>
      {children}
    </Button>
  );
};

export default LoginButton;
