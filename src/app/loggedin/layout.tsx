import { getServerSession } from "next-auth";
import { NavBar } from "../components/NavBar";
import ReduxProvider from "../../redux/ReduxProvider";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    
    <html lang="en">
      <body>
        <ReduxProvider>
        <NavBar />
        {children}
        </ReduxProvider>
      </body>
    </html>
    
  );
}
