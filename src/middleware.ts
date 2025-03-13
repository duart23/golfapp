import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: ({ req, token }) => {
      if (req.nextUrl.pathname === "/loggedin" && !token) {
        return false; // Redirect to login if no session
      }
      return true; // Allow access if logged in
    },
  },
});

export const config = {
  matcher: ["/loggedin/:path*"], // Protect all /loggedin routes
};
