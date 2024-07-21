import Button from "@/components/buttons/Button";
import Input from "@/components/input/Input";
import {  addUser } from "@/lib/action";
import { auth } from "@/lib/nextAuth";

const CreateUserForm = () => {
  return (
    <form action={addUser} className="flex flex-col gap-4">
    <Input type="text" placeholder="Username" name={"userName"} />
    <Input type="email" placeholder="email" name={"email"} />
    <Input type="password" placeholder="password" name={"password"} />
    {/* <Input type="select" placeholder="password" name={"thumbnail"} /> */}
    <div className="flex gap-4">
    <label htmlFor="isAdmin" className="text-lg select-none">Is admin</label>
    <input type="checkbox" className="w-4" name="isAdmin" id="isAdmin" />
    </div>
    <Button variant={"primary"}>Create user</Button>
  </form>
  )
}

export default CreateUserForm