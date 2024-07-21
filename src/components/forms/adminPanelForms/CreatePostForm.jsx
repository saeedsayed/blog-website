import Button from "@/components/buttons/Button";
import Input from "@/components/input/Input";
import { addPost } from "@/lib/action";
import { auth } from "@/lib/nextAuth";
import React from "react";

const CreatePostForm = async() => {
    const { user } = await auth();
  return (
    <form action={addPost} className="flex flex-col gap-4">
      <Input type="text" placeholder="Title" name={"title"} />
      <Input type="text" placeholder="desc" name={"desc"} />
      <Input type="text" placeholder="thumbnail URL" name={"thumbnail"} />
      <Button variant={"primary"}>Add post</Button>
    </form>
  );
};

export default CreatePostForm;
