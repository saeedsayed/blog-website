"use client";
import Button from "@/components/buttons/Button";
import LoginButton from "@/components/buttons/LoginButton";
import Input from "@/components/input/Input";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { register } from "@/lib/action";

// export const metadata = {
//   title: "register",
// };

const RegisterPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      userName: e.target.userName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    // console.log(formData)
    const res = await register(formData);
    console.log("res: ", res);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full md:w-2/3 lg:w-2/4 m-auto "
    >
      <Input
        type="text"
        placeholder="User name"
        name="userName"
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
        name="confirmPassword"
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
