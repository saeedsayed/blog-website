import { connectToDb } from "./utils"
import { users } from "./models"
import NextAuth from "next-auth"
import github from "next-auth/providers/github"
import google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [github, google],
    callbacks: {
        async signIn({ user, account, profile }) {
            try {
                connectToDb()
                const isExist = Boolean(await users.findOne({ email: user.email }))
                if (!isExist) {
                    await createNewUser(account.provider, profile)
                }
            } catch (err) {
                console.log(err)
                return false
            }
            connectToDb()
            return true
        }
    }
})

const createNewUser = async (provider, user) => {
    if (provider === 'github') {
        const newUser = new users({
            userName: user.login,
            email: user.email,
            avatar: user.avatar_url,
        })
        await newUser.save()
    } else if (provider === 'google') {
        const newUser = new users({
            userName: user.name,
            email: user.email,
            avatar: user.picture,
        })
        await newUser.save()
    }
}