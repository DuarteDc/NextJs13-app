'use client'
import React from "react";
// import { GoogleLogin } from '@react-oauth/google';
import UserList from "@/infraestructure/components/UserList";

export default function SignIn() {
    return (
        <main className="grid grid-cols-4 min-h-screen p-24 w-full gap-3">
            <UserList />
        </main>
    )
}