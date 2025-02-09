import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | GitHub user search app",
  description: "GitHub user search app challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceMono.className} antialiased bg-light-off-white dark:bg-dark-blue-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  );
}
