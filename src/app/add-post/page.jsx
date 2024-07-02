import Button from "@/components/buttons/Button";
import Input from "@/components/input/Input";
import { addPost } from "@/lib/action";
import React from "react";

const AddPost = () => {
  return (
    <div>
      <form action={addPost} className="flex flex-col gap-4">
        <Input type="text" placeholder="Title" name={"title"} />
        <Input type="text" placeholder="userId" name={"userId"} />
        <Input type="text" placeholder="desc" name={"desc"} />
        <Input type="text" placeholder="slug" name={"slug"} />
        <Input type="text" placeholder="thumbnail" name={"thumbnail"} />
        <Button variant={"primary"}>Add post</Button>
      </form>
    </div>
  );
};

export default AddPost;
