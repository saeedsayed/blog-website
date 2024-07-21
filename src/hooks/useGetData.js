import { connectToDb } from "@/lib/utils";
import { posts, users } from "@/lib/models";

export const useGetPosts = async () => {
    try{
        const res = await fetch(`http://localhost:3000/api/blog`, {
            method: "GET",
            cache: "no-store",
        });
        return res.json();
    }catch (err){
    }
}
export const useGetPost = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
        method: "GET",
        cache: "no-store",
    });
    return res.json();
}
export const useGetUsers = async () => {
    const res = await fetch(`http://localhost:3000/api/users`, {
        method: "GET",
        cache: "no-store",
    })
    return res.json();
}
export const useGetUser = async (id) => {
    connectToDb()
    const data = await users.findById(id)
    return data;
}