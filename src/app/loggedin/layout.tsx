import { getServerSession } from "next-auth";
import { NavBar } from "../components/NavBar";
import ReduxProvider from "../../redux/ReduxProvider";
import Footer from "../components/footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <NavBar />
          {children}
          <div className="absolute inset-x-0 bottom-0">
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
