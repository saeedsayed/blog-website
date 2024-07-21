'use client'
import { useState } from "react";
import LoginButton from "@/components/buttons/LoginButton";
import Button from "@/components/buttons/Button";
import Input from "@/components/input/Input";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { login } from "@/lib/action";
import Spinner from "@/components/loading/Spinner";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    const res = await login(data);
    if (res === "success") {
      router.push("/admin");
    } else {
      setError('Invalid email or password');
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-10 items-center">
      {error && <p className="text-red-500">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full md:w-2/3 lg:w-2/4 m-auto "
      >
        <Input
          type="email"
          placeholder="Email"
          name="email"
          label="Email:"
          id={"email"}
          autoFocus
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          label="Password:"
          id={"password"}
        />
        <Button variant={"primary"}>
          {loading ? (
            <span className="w-6">
              <Spinner />
            </span>
          ) : (
            "Login"
          )}
        </Button>
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
    </div>
  );
};

export default LoginForm;
