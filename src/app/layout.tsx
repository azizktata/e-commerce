import type { Metadata } from "next";
import "./globals.css";
import { jost } from "./ui/fonts";
import Sidebar from "./ui/sidebar";
import ClientProvider from "./store/provider";
import { Toaster } from "react-hot-toast";
import Header from "./ui/header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const metadata: Metadata = {
  title: "Petssy",
  description: "Pettsy for Selling Pet's Food",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated, getUser, getPermission } =
    await getKindeServerSession();
  const user = await getUser();
  const requieredPermission = await getPermission("admin");

  return (
    <html lang="en">
      <body className={`${jost.className}  antialiased`}>
        {" "}
        <ClientProvider>
          <Header
            isAuthenticated={await isAuthenticated()}
            user={user}
            isAdmin={requieredPermission?.isGranted}
          />
          <Sidebar />
          <Toaster />
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
