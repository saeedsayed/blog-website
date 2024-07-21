import { users } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        connectToDb()
        const res = await users.find()
        return NextResponse.json(res)
    } catch (err) {
        throw new Error(err)
    }
}