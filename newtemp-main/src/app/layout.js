import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SocialBar from "@/components/SocialBar.jsx/SocialBar";
import Footer from "@/components/common/Footer";
import toast, { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "XTREME DIGITONIX - Digital Marketing Agency",
  description:
    "At Skyline Services, we're more than a service provider; we're architects of your brand's journey to success. Specializing in digital marketing, graphic design, and tailored solutions, we bring innovation, strategy, and creativity to every project. With a commitment to excellence, transparent collaboration, and a client-centric approach, we transform visions into tangible results. Join us on a transformative journey where your brand ascends to new heights. Elevate your business with XTREME DIGITONIX - where possibilities meet precision - Digital Marketing & Website Development Agency Karachi Pakistan",
  creator: "XTREME DIGITONIX TEAM",
  authors: { name: "Ahmed Aqil", url: "https://mahmed.vercel.app" },
  category: "business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} -z-10 scroll-smooth`}>
        <SocialBar />
        <Toaster />

        <main className="flex size-full flex-col items-center justify-center -z-10">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
