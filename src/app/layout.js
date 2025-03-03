import { Geist, Geist_Mono } from "next/font/google";
import prisma from "@/lib/prisma"; // Adjust the path if needed
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }) {
  const { slug } = params; // Get the slug from the URL

  // Fetch the webpage data from Prisma, including the business name and favicon
  const page = await prisma.webs.findUnique({
    where: { id: Number(slug) }, // Ensure the slug is a number
    select: {
      owner: {
        select: {
          business: true, // Fetch the business name from personal_data
        },
      },
      header: {
        select: {
          logo: true, // Fetch the favicon URL from the header
        },
      },
    },
  });

  return {
    title: page?.owner?.business || "Mi Webpage",
    description: `${page?.owner?.business || "Mi website"}!`,
    favicon: page?.header?.logo || "/default-favicon.ico", // Fallback favicon
  };
}

export default async function RootLayout({ children, params }) {
  const metadata = await generateMetadata({ params });

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.favicon && (
          <link rel="icon" href={metadata.favicon} type="image/png" />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
