"use client";

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>      
        <Authenticator>
          {children}
        </Authenticator>
      </body>
    </html>
  );
}
