"use server"
import { redirect } from "next/navigation";
import { posts, users } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs"
import { auth, signIn } from "./nextAuth";
export const addPost = async (data) => {
    const { title, desc, thumbnail } = Object.fromEntries(data);
    const { user: { id } } = await auth()
    const slug = title.replace(/ /g, "-").toLowerCase();
    try {
        connectToDb()
        const newPost = new posts({ title, userId: id, desc, slug, thumbnail })
        await newPost.save();
        revalidatePath("/blog");
    } catch (err) {
        console.log(err);
    }
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

export const addUser = async (data) => {
    let { userName, email, password, isAdmin } = Object.fromEntries(data);
isAdmin === "on"? isAdmin = true : isAdmin = false
const hash = await bcrypt.hash(password, 10)
    try {
        connectToDb()
        const newUser = new users({ userName, email, password: hash, isAdmin })
        await newUser.save();
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
    }
}
export const deleteUser = async (id) => {

    try {
        connectToDb()
        await users.findByIdAndDelete(id);
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
    }
}

export const register = async formData => {
    const { userName, email, password } = formData
    try {
        connectToDb()
        const isUserExist = Boolean(await users.findOne({ userName }))
        const isEmailExist = Boolean(await users.findOne({ email }))
        if (isUserExist) {
            return 'Username already exist'
        };
        if (isEmailExist) {
            return 'Email already exist'
        };
        const hash = await bcrypt.hash(password, 10)
        const newUser = new users({ userName, email, password: hash })
        await newUser.save()
        return 'success'
    } catch (err) {
        console.log(err)
        return "Something went wrong"
    }
}

export const login = async (formData) => {
    const { email, password } = formData
    try {
        await signIn('credentials', { email, password })
    } catch (err) {
        if (err.type == 'CredentialsSignin' || err.type == 'CallbackRouteError') {
            return "Invalid credentials"
        } else if (err.message == 'NEXT_REDIRECT') {
            return 'success'
        }
        throw err
    }
}