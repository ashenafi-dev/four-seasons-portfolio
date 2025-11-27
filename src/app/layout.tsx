import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Four Seasons Portfolio | Developer Portfolio",
  description: "A unique developer portfolio showcasing projects through the lens of four seasons - Autumn, Winter, Spring, and Summer. Built with Next.js, TypeScript, and Tailwind CSS.",
  keywords: ["developer portfolio", "full-stack engineer", "web development", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Ashenafi Yirgalem" }],
  openGraph: {
    title: "Four Seasons Portfolio",
    description: "A unique developer portfolio showcasing projects through the lens of four seasons",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
