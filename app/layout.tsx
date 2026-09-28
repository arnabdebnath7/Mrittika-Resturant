import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mrittika — Modern Bengali Dining, Kolkata",
  description:
    "A contemporary Bengali table in Kolkata — old recipes, new ritual, and a dining room made for adda.",
  metadataBase: new URL("https://mrittika-resturant.vercel.app"),
  openGraph: {
    title: "Mrittika — Modern Bengali Dining",
    description: "Old recipes. New ritual.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}