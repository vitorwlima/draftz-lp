import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montSerrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Draftz - Write Smarter, Publish Faster",
  description:
    "Draftz is your modern content creation workspace. Write, edit, and manage your posts with an AI assistant that helps you create better content faster.",
  keywords: [
    "AI writing assistant",
    "content creation",
    "writing tool",
    "AI editor",
    "blog writing",
    "content management",
  ],
  openGraph: {
    title: "Draftz - AI-Powered Writing Assistant",
    description:
      "Write smarter, publish faster. Create better content with AI assistance.",
    type: "website",
    siteName: "Draftz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Draftz - AI-Powered Writing Assistant",
    description:
      "Write smarter, publish faster. Create better content with AI assistance.",
  },
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
