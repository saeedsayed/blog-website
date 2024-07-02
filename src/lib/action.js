
import { redirect } from "next/navigation";
import { posts, users } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs"
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

export const register = async formData => {
    "use server"
    console.log('formData: ', formData);
    const { userName, email, password, confirmPassword } = Object.fromEntries(formData)
    if (password !== confirmPassword) {
        return console.log('Passwords do not match');
    }
    try {
        connectToDb()
        const isExist = Boolean(await users.findOne({ email }))
        if (isExist) {
            return 'User already exist'
        };
        const hash = await bcrypt.hash(password, 10)
        const newUser = new users({ userName, email, password: hash })
        newUser.save()
    } catch (err) {
        console.log(err)
    }
    // redirect('/login')
}