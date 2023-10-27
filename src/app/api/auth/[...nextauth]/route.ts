import NextAuth, { AuthOptions, Session } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import Credentials from 'next-auth/providers/credentials';

import { signInNextAuth, signInByGoogle } from '@/infraestructure/repositories/auth.repository';
import { LoginResponseDto } from '@/infraestructure/dto/auth';
import { type User } from '@/domain/models/User';

const authOptions: AuthOptions = {
    pages: {
        signIn: '/auth/signin'
    },
    callbacks: {

        async jwt({ token, account, user }) {
            if (account) {
                switch (account.type) {
                    case 'oauth':
                        const response = await signInByGoogle({ "authorization-google-token": account.id_token! });
                        token.user = response!.user;
                        token.accessToken = response!.token;
                        break;
                    case 'credentials':
                        token.user = user!.user;
                        token.accessToken = user.token
                        break;
                }
            }
            return token;
        },

        async session({ session, token }) {
            session.token = token.accessToken;
            session.user = token.user as User;
            return session;
        }
    },
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: {
                    label: "email",
                    type: "email",
                    placeholder: "johndoe@email.com",
                },
                password: { label: "password", type: "password" },
            },
            authorize: async (credentials): Promise<any> => {
                return await signInNextAuth({ email: credentials!.email, password: credentials!.password })
            },
        })
        ,
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            idToken: true
        }),
        FacebookProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ]
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }