"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logout from "./logout";
import Image from "next/image";

export const NavBar = () => {
  const router = useRouter();

  return (
    <nav className="navbar flex items-center justify-between h-16 px-8">
      <div
        className="flex items-center gap-2 w-1/3"
        onClick={() => router.push("/dashboard")}>
        <Image src="/path/to/logo.png" className="h-8 w-auto" alt="logo" width={32} height={32} />
        <h1 className="text-lg font-bold">GOLF APP</h1>
      </div>

      <div className="flex gap-12 text-blue-400 font-normal w-1/3 justify-center">
        <Link href="/dashboard" className="hover:text-blue-600">
          MAIN
        </Link>
        <Link href="/dashboard/games" className="hover:text-blue-600">
          GAMES
        </Link>
        <Link href="/dashboard/friends" className="hover:text-blue-600">
          FRIENDS
        </Link>
        <Link href="/dashboard/statistics" className="hover:text-blue-600">
          STATISTICS
        </Link>
        <Link href="/dashboard/support" className="hover:text-blue-600">
          SUPPORT
        </Link>
      </div>

      <div className="w-1/3 text-right">
        <Logout />
      </div>
    </nav>
  );
};
