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
        

        <div className="flex min-h-screen">
{/* SideBar */}
<div className="flex-1 p-4 bg-gray-100 ">
{children} 
</div>
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
