"use server"
import { redirect } from "next/navigation";
import { posts, users } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs"
export const addPost = async (data) => {

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

    try {
        connectToDb()
        await posts.findByIdAndDelete(id);
        revalidatePath("/blog");
    } catch (err) {
        console.log(err);
    }
}

export const register = async formData => {
    const { userName, email, password } = formData
    console.log('formData: ', formData);
    try {
        connectToDb()
        const isExist = Boolean(await users.findOne({ email }))
        if (isExist) {
            return 'User already exist'
        };
        const hash = await bcrypt.hash(password, 10)
        const newUser = new users({ userName, email, password: hash })
        await newUser.save()
        return 'success'
    } catch (err) {
        console.log(err)
        return err
    }
    // redirect('/login')
}