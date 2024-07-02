import { deletePost } from "@/lib/action";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const PostCard = async ({ post }) => {
  return (
    <div className="w-[calc((100%-32px)/3)] lg:w-[calc((100%-48px)/4)] min-w-56">
      <div className="flex items-center">
        <div className="relative w-full h-[400px]">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="h-[398px] border whitespace-nowrap flex flex-col items-center justify-between w-16 border-l-0">
          <div className="rotate-[270deg] my-auto whitespace-nowrap text-xl">
            {post.createdAt.toString().slice(0, 10)}
          </div>
          <form
            className="w-full"
            action={async (_) => {
              "use server";
              await deletePost(post._id);
            }}
          >
            <button
              className="w-full bg-red-800 flex justify-center text-3xl py-5"
              title="delete this post"
            >
              <MdDeleteOutline />
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-3 ps-3">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-400">{post.desc}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="text-btn underline font-bold"
        >
          Read More {"-->"}
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
