import PostListItem from "@/components/adminPanelCom/PostListItem";
import UserListItem from "@/components/adminPanelCom/UserListItem";
import CreatePostForm from "@/components/forms/adminPanelForms/CreatePostForm";
import CreateUserForm from "@/components/forms/adminPanelForms/CreateUserForm";
import { useGetPosts, useGetUsers } from "@/hooks/useGetData";

export const metadata = {
  title: "Admin page",
  description: "my admin page",
};

const Admin = async () => {
  const posts = await useGetPosts();
  const users = await useGetUsers();
  return (
    <div className="flex flex-col items-center gap-24">
      <div className="flex gap-8 w-full">
        <div className="w-1/2">
          <h2 className="text-3xl mb-3">Posts ({posts.length})</h2>
          <ul className="flex flex-col gap-4 max-h-[50vh] overflow-y-auto pe-3">
            {posts.map((post, index) => (
              <PostListItem key={index} post={post}/>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
        <h2 className="text-3xl mb-3">Create new post</h2>
        <CreatePostForm/>
        </div>
      </div>
      <div className="flex gap-8 w-full">
        <div className="w-1/2">
        <h2 className="text-3xl mb-3">Users ({users.length})</h2>
        <ul className="flex flex-col gap-4 max-h-[50vh] overflow-y-auto pe-3">
          {users.map((user, index) => (
            <UserListItem key={index} user={user}/>
          ))}
        </ul>
        </div>
        <div className="w-1/2 ">
        <h2 className="text-3xl mb-3">Create new user</h2>
        <CreateUserForm/>
        </div>
      </div>
    </div>
  );
};

export default Admin;
