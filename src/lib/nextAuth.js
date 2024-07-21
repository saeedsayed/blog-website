import { connectToDb } from "./utils"
import { users } from "./models"
import NextAuth from "next-auth"
import github from "next-auth/providers/github"
import google from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'
import { authConfig } from "./auth.config"


const credentialsConfig = {
    async authorize(credentials) {
        const { email, password } = credentials
        try {
            connectToDb()
            const user = await users.findOne({ email })
            if (!user) {
                throw new Error('No user found')
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                throw new Error('Incorrect password')
            }
            return user
        } catch (err) {
            console.log('error from nextAuth.js:', err.message)
            return null
        }
    }
}



export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [github, google, CredentialsProvider(credentialsConfig)],
    callbacks: {
        // async jwt({ token }) {
        //     connectToDb()
        //     const user = await users.findOne({ email: token.email })
        //     if (user) {
        //         token.id = user._id
        //         token.name = user.userName
        //         token.image = user.avatar
        //         token.isAdmin = user.isAdmin
        //     }
        //     return token
        // },
        // async session({ session, token }) {
        //     if (token) {
        //         session.user.id = token.id
        //         session.user.name = token.name
        //         session.user.image = token.image
        //         session.user.isAdmin = token.isAdmin
        //     }
        //     return session
        // },
        async signIn({ user, account, profile }) {
            try {
                connectToDb()
                let isExist = await users.findOne({ email: user.email })
                if (!isExist) {
                    await createNewUser(account.provider, profile)
                    isExist = await users.findOne({ email: user.email })
                }
                return isExist
            } catch (err) {
                console.log('error from nextAuth.js line 40', err)
                return false
            }
        },
        ...authConfig.callbacks
    },
})

const createNewUser = async (provider, user) => {
    let newUser
    if (provider === 'github') {
        newUser = new users({
            userName: user.login,
            email: user.email,
            avatar: user.avatar_url,
        })
        await newUser.save()
    } else if (provider === 'google') {
        newUser = new users({
            userName: user.name,
            email: user.email,
            avatar: user.picture,
        })
        await newUser.save()
    }
    return newUser
}