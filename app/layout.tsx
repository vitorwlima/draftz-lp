import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montSerrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Draftz",
  description: "Draftz is a platform for managing your online content.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={montSerrat.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;
