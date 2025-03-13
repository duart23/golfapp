import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: ({ req, token }) => {
      if (req.nextUrl.pathname === "/dashboard" && !token) {
        return false; // Redirect to login if no session
      }
      return true; // Allow access if logged in
    },
  },
});

export const config = {
  matcher: ["/dashboard/:path*"], // Protect all /dashboard routes
};
