"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const NavBar = () => {
  const router = useRouter();

  return (
    <nav className="navbar relative flex items-center h-16 px-8">
      <div
        className="logo flex items-center gap-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <img className="h-8 w-auto" alt="logo" />
        <h1 className="text-lg font-bold">GOLF APP</h1>
      </div>

      <div className="pages absolute left-1/2 transform -translate-x-1/2 flex gap-12 text-blue-400 font-normal">
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
    </nav>
  );
};
