import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export default NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'E-mail'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize(credentials) {
                if (credentials === undefined)
                    throw new Error('Empty credentials')

                return {
                    id: '1',
                    name: 'Exemplo',
                    email: 'exemplo@exemplo.com',
                    accessToken: 'token'
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            if (account && account.type === 'credentials' && user) {
                token.accessToken = user.accessToken
            }

            return token
        },
        async session({ session, token }) {
            if (token && token.accessToken) {
                session.accessToken = token.accessToken
            }

            return session
        }
    },
    jwt: {
        secret: process.env.JWT_SIGNING_PRIVATE_KEY
    },
    pages: {
        signIn: '/auth/signin'
    }
})
