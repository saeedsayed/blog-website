"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Spinner from "../loading/Spinner";

const LoginButton = ({ provider, children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const logInHandler = async (_) => {
    setIsLoading(true)
    await signIn(provider, { redirect: true, callbackUrl: "/admin" });
  };
  return (
    <button
      type={"button"}
      onClick={logInHandler}
      title={`log in with ${provider}`}
      className="flex items-center justify-center rounded-xl  px-4 py-2"
      disabled={isLoading}
    >
      {children}
      {isLoading && <span className="ml-2 w-8"><Spinner/></span>}
    </button>
  );
};

export default LoginButton;
