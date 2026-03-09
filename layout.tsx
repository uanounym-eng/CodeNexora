import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codenexora.com"),
  title: "CodeNexora - Learn Programming From Zero to Professional",
  description: "Practical programming tutorials for beginners. Learn coding step by step with Omar AG through easy-to-follow tutorials on HTML, CSS, JavaScript, C and more.",
  keywords: ["CodeNexora", "Programming", "Tutorials", "Learn to Code", "HTML", "CSS", "JavaScript", "C Programming", "Web Development", "Omar AG"],
  authors: [{ name: "Omar AG" }],
  icons: {
    icon: "/codenexora-logo.jpg",
  },
  openGraph: {
    title: "CodeNexora - Learn Programming",
    description: "Practical programming tutorials for beginners",
    url: "https://youtube.com/@codenexora-01",
    siteName: "CodeNexora",
    type: "website",
    images: ["/codenexora-logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeNexora - Learn Programming",
    description: "Practical programming tutorials for beginners",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Security: Prevent MIME type sniffing */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
