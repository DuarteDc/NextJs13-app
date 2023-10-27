import { User as UserDto } from '@/domain/models/User'
import { LoginDto } from '@/infraestructure/dto/auth'
import NextAuth, { Awaitable, DefaultSession } from 'next-auth'
import { CommonProviderOptions } from 'next-auth/providers/index';

declare module "next-auth" {

    interface User extends Session { }

    interface Session {
        user: UserDto,
        token: string | unknown,
    }


}