import { deletePost } from "@/lib/action";
import Image from "next/image";
import React from "react";
import { MdDelete, MdDeleteForever } from "react-icons/md";

const PostListItem = ({ post }) => {

    const handleDeleteAction = async () => {
      "use server";
      await deletePost(post._id);
    }
  return (
    <li className="flex gap-4 items-center">
      <div className="relative w-20 h-20">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="">
        <h4>{post.title}</h4>
        <p>{post.createdAt.slice(0, 10)}</p>
        <p>{post.userId}</p>
      </div>
      <form className="ms-auto" action={handleDeleteAction}>
        <button className="text-4xl text-red-700" title={`delete ${post.title} post`}><MdDeleteForever/></button>
      </form>
    </li>
  );
};

export default PostListItem;
