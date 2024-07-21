"use client";
import Button from "@/components/buttons/Button";
import LoginButton from "@/components/buttons/LoginButton";
import Input from "@/components/input/Input";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { register } from "@/lib/action";
import Spinner from "@/components/loading/Spinner";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [isErr, setIsErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { userName, email, password, confirmPassword } = e.target;
      if (password.value !== confirmPassword.value) {
        throw new Error("Password does not match");
      }
      const formData = {
        userName: userName.value,
        email: email.value,
        password: password.value,
      };
      const res = await register(formData);
      if (res === "success") {
        router.push("/login");
      } else {
        throw new Error(res);
      }
    } catch (err) {
      setIsErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center w-full md:w-2/3 lg:w-2/4 m-auto ">
      {isErr && (
        <p className="text-red-500 p-5 border-double border-4 w-full border-red-500">
          {isErr}
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
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
        <Button variant={"primary"} disabled={isLoading}>
          {isLoading ? (
            <span className="w-6">
              <Spinner />
            </span>
          ) : (
            "Register"
          )}
        </Button>
        <div className="flex gap-11 text-4xl">
          <LoginButton provider={"google"}>
            <FcGoogle />
          </LoginButton>
          <LoginButton provider={"github"}>
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
    </div>
  );
};

export default RegisterForm;
