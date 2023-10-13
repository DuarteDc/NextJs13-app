import NextAuth, { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import Credentials from 'next-auth/providers/credentials';

import { signInNextAuth } from '@/infraestructure/repositories/auth.repository';

const authOptions: AuthOptions = {
    pages: {
        signIn: '/auth/signin'
    },
    callbacks: {
        async jwt({ token, account, user }) {
            if (account) {
                token.accessToken = account.access_token;
                token.user = user;
            }
            return token;
        },
        async session({ session, token, user }) {
            // session['accessToken']! = token.accessToken;
            session.user = token.user as any;
            return session;
        }
    },
    providers: [
        Credentials({
            name: 'Custom Login',
            credentials: {
                email: {
                    label: "email",
                    type: "email",
                    placeholder: "johndoe@email.com",
                },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials) {
                const { user, token } = await signInNextAuth({ email: credentials!.email, password: credentials!.password });
                return {
                    ...user,
                    token
                };
            },
        })
        ,
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            idToken: true,
            checks: ["pkce", "state"],
            async profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                }
            }
        }),
        FacebookProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ]
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }