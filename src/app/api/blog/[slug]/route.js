import { posts } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const GET = async (request,{ params }) => {
    const { slug } = params
    try {
        connectToDb()
        const res = await posts.findOne({ slug })
        return NextResponse.json(res)
    } catch (err) {
        throw new Error(err)
    }
}