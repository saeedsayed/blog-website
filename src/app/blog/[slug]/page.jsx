import Image from "next/image";
import React from "react";
import { useGetPost, useGetUser } from "@/hooks/useGetData";


export async function GenerateMetadata({ params }) {
  const post = await useGetPost(params.slug);
  return {
    title: post.title,
    description: post.desc,
  };
}

const SingleBlogPage = async ({ params }) => {
  const post = await useGetPost(params.slug);
  const user = await useGetUser(post.userId);
  return (
    <div className="sm:flex gap-6 h-[calc(100vh-180px)]">
      <div className="h-40 sm:h-auto sm:w-1/3 relative">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="flex gap-4">
          <div className="w-12 relative">
            <Image
              src={user.avatar}
              alt="post image"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div>
            <h4 className="text-soft">Author</h4>
            <p className="text-sm">{user.userName}</p>
          </div>
          <div>
            <h4 className="text-soft">Published</h4>
            <p className="text-sm">{post.createdAt.toString().slice(0, 10)}</p>
          </div>
        </div>
        <p className="text-soft h-[calc(100vh-250px)] overflow-auto">
          {post.desc}
        </p>
      </div>
    </div>
  );
};

export default SingleBlogPage;
