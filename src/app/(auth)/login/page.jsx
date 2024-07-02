import React from "react";
import LoginButton from "@/components/buttons/LoginButton";
import Button from "@/components/buttons/Button";
import Input from "@/components/input/Input";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
const LoginPage = async () => {
  return (
    <>
      <form
        action=""
        className="flex flex-col gap-4 w-full md:w-2/3 lg:w-2/4 m-auto "
      >
        <Input
          type="text"
          placeholder="Name"
          name="username"
          label="Name:"
          id={"name"}
          autoFocus
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          label="Password:"
          id={"password"}
        />
        <Button variant={"primary"}>Login</Button>
        <div className="flex gap-11 text-4xl">
          <LoginButton provider={"google"} href={"/login"}>
            <FcGoogle />
          </LoginButton>
          <LoginButton provider={"github"} href={"/login"}>
            <FaGithub />
          </LoginButton>
        </div>
        <p>
          Don't have an account?{" "}
          <Link href="/register" className="text-btn underline">
            Register
          </Link>
        </p>
      </form>
    </>
  );
};

export default LoginPage;
