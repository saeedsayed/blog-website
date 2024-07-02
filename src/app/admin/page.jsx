import Button from "@/components/buttons/Button";
import { auth } from "@/lib/nextAuth";
import Image from "next/image";

export const metadata = {
  title: "Admin page",
  description: "my admin page",
};

const Admin = async () => {
  const session = await auth();
  return (
    <div className="flex flex-col items-center gap-8">
      {!!session ? (
        <>
          <h1>Hello {session.user.name}</h1>
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-4">
            <Image src={session.user.image} alt={session.user.name} fill />
          </div>
          <p>{session.user.email}</p>
        </>
      ) : (
        <Button variant={'primary'} href="/login">Login</Button>
      )}
    </div>
  );
};

export default Admin;
