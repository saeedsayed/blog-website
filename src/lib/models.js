import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            require: true,
            unique: true,
            min: 4,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        avatar: {
            type: String,
            required: true,
            default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        },
        password: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            min: 4,
            max: 20,
        },
        desc: {
            type: String,
            required: true,
            min: 14,
        },
        thumbnail: {
            type: String,
        },
        userId: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

export const users =
    mongoose.models?.users || mongoose.model("users", userSchema);
export const posts =
    mongoose.models?.posts || mongoose.model("posts", postSchema);
