import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Le Squat | Builders Collective",
  description:
    "A band of engineers who live and breathe problem-solving. We build things together, like street artists of code.",
  keywords: [
    "developers",
    "engineers",
    "collective",
    "builders",
    "open source",
  ],
  openGraph: {
    title: "Le Squat | Builders Collective",
    description: "A band of engineers who live and breathe problem-solving.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased noise`}
      >
        {children}
      </body>
    </html>
  );
}
