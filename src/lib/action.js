
import { redirect } from "next/navigation";
import { posts } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";
export const addPost = async (data) => {
    "use server"
    const { title, userId, desc, slug, thumbnail } = Object.fromEntries(data);
    try {
        connectToDb()
        const newPost = new posts({ title, userId, desc, slug, thumbnail })
        await newPost.save();
        revalidatePath("/blog");
    } catch (err) {
        console.log(err);
    }
    redirect("/blog");
}

export const deletePost = async (id) => {
    "use server"
    try {
        connectToDb()
        await posts.findByIdAndDelete(id);
        revalidatePath("/blog");
    } catch (err) {
        console.log(err);
    }
}