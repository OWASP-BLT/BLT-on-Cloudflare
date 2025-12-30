import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/components/header";
import { QueryProvider } from "@/lib/providers/query-provider";

export const metadata = {
  title: "OWASP BLT",
  description:
    "OWASP Bug Logging Tool: report bugs, earn rewards, and help secure the web.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="bg-gray-50">
        <QueryProvider>
          <Header />
          <main className="pt-24 mt-4">{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}


