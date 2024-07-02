import Button from "@/components/buttons/Button";
import LoginButton from "@/components/buttons/LoginButton";
import Input from "@/components/input/Input";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const RegisterPage = () => {
  return (
    <form
      action=""
      className="flex flex-col gap-4 w-full md:w-2/3 lg:w-2/4 m-auto "
    >
      <Input
        type="text"
        placeholder="User name"
        name="username"
        label="User name:"
        id={"name"}
        autoFocus
      />
      <Input
        type="email"
        placeholder="Email"
        name="email"
        label="Email:"
        id={"email"}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        label="Password:"
        id={"password"}
      />
      <Input
        type="password"
        placeholder="Confirm password"
        name="confirm password"
        label="Confirm password:"
        id={"confirm password"}
      />
      <Button variant={"primary"}>Register</Button>
      <div className="flex gap-11 text-4xl">
        <LoginButton provider={"google"} href={"/login"}>
          <FcGoogle />
        </LoginButton>
        <LoginButton provider={"github"} href={"/login"}>
          <FaGithub />
        </LoginButton>
      </div>
      <p>
        Already have an account?{" "}
        <Link href="/login" className="text-btn underline">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterPage;
