import PostCard from "@/components/blog/PostCard";
import { useGetPosts } from "@/hooks/useGetData";
import { unstable_noStore as noStore } from "next/cache";

export const metadata = {
  title: "Blog",
  description: "Blog Developer",
};
const BlogPage = async () => {
  noStore();
  const posts = await useGetPosts();

  return (
    <div className="flex flex-wrap gap-4 md:justify-start justify-center">
      {posts.map((e, index) => (
        <PostCard key={index} post={e} />
      ))}
    </div>
  );
};

export default BlogPage;
