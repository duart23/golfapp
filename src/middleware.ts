import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
  callbacks: {
    authorized: ({ token }) => {
      console.log("Middleware Token:", token); // Debug session
      return !!token; // Only allow if session exists
    },
  },
});

export const config = {
  matcher: ["/dashboard/:path*"], // Protect dashboard
};
