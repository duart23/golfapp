'use client';

import { signOut } from "next-auth/react";

export default function Logout() {
    return (
        <span
            onClick={() => {
                signOut({ callbackUrl: "/" }); // Redirects to home after logout
            }} 
            className="cursor-pointer"
        >
            Logout
        </span>
    );
}
