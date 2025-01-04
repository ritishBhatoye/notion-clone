import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";


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

<Sidebar/>
<div className="flex-1 p-4 bg-gray-100 overflow-y-auto scrollbar-hide">
{children} 
</div>
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
