import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Header } from "@/components/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
      >

        <Header/>
        {children}

        <div className="flex ">
{/* SideBar */}

        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
