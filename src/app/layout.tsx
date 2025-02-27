import "./globals.css";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Logout from "./logouts";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <nav>
          {session &&
          <Logout />
          }
          {!session &&
          <Link href="/">Login</Link>
          }
        </nav>
        {children}
      </body>
    </html>
  );
}
