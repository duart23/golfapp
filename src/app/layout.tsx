import "./globals.css";
import Dashboard from "./Dashboard";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
  
        <Dashboard/>
        {children}
      </body>
    </html>
  );
}
