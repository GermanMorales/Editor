import { Geist, Geist_Mono } from "next/font/google";
import { prisma } from "@/lib/prisma"; // Adjust the path if needed
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

  // Fetch the webpage data from Prisma, including the business name
  const page = await prisma.webs.findUnique({
    where: { id: Number(slug) }, // Ensure the slug is a number
    select: {
      owner: {
        select: {
          business: true, // Fetch the business name from personal_data
        },
      },
    },
  });

  return {
    title: page?.owner?.business || "Mi webpage",
    description: `${page?.owner?.business || "nuestro webpage"}!`,
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
