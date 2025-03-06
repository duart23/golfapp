"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logout from "./logout";

export const NavBar = () => {
  const router = useRouter();

  return (
    <nav className="navbar flex items-center justify-between h-16 px-8">
      <div
        className="flex items-center gap-2 w-1/3"
        onClick={() => router.push("/loggedin")}
      >
        <img className="h-8 w-auto" alt="logo" />
        <h1 className="text-lg font-bold">GOLF APP</h1>
      </div>

      <div className="flex gap-12 text-blue-400 font-normal w-1/3 justify-center">
        <Link href="/loggedin" className="hover:text-blue-600">
          MAIN
        </Link>
        <Link href="/loggedin/games" className="hover:text-blue-600">
          GAMES
        </Link>
        <Link href="/loggedin/friends" className="hover:text-blue-600">
          FRIENDS
        </Link>
        <Link href="/loggedin/statistics" className="hover:text-blue-600">
          STATISTICS
        </Link>
        <Link href="/loggedin/support" className="hover:text-blue-600">
          SUPPORT
        </Link>
      </div>

      <div className="w-1/3 text-right">
        <Logout />
      </div>
    </nav>
  );
};
