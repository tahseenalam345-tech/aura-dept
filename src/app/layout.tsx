import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; 
import "./globals.css"; // <--- THIS KEEPS YOUR TAILWIND STYLES WORKING

// Configure the Font Globally
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"], 
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Aura Dept",
  description: "Welcome to the Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* We add 'bg-[#020617]' here to ensure your dark theme stays consistent.
         We add 'text-white' to ensure text is white by default.
      */}
      <body className={`${montserrat.className} bg-[#020617] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}