import "./globals.css";
import Dashboard from "./Dashboard";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <Dashboard/>
       <main className="ml-60 h-screen p-4 flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
