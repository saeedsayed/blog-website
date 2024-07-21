
export const authConfig = {
    pages: {
        signIn: '/login'
    },
    providers: []
    ,
    callbacks: {
        async jwt({user, token }) {
            if (user) {
                token.id = user._id
                token.name = user.userName
                token.image = user.avatar
                token.isAdmin = user.isAdmin
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.image = token.image
                session.user.isAdmin = token.isAdmin
            }
            return session
        },
        authorized({ auth, request }) {
            const user = auth?.user
            const isAdmin = user && user?.isAdmin
            const isOnAdminRoute = request?.nextUrl?.pathname?.startsWith('/admin')
            const isOnBlogRoute = request?.nextUrl?.pathname?.startsWith('/blog')
            const isOnLoginPage = request?.nextUrl?.pathname?.startsWith('/login')

            if (!isAdmin && isOnAdminRoute) {
                return false
            }
            if (!user && isOnBlogRoute) {
                return false
            }
            if (user && isOnLoginPage) {
                return Response.redirect(new URL('/blog', request.url))
            }
            return true
        }
    }
}
