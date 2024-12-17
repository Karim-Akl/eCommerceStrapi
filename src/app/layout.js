import { Roboto } from "next/font/google";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
export const metadata = {
  title: "Ecommerce",
  description: "Ecommerce",
};
const inter = Roboto({ subsets: ["latin"], weight: ["500", "700", "900"] });
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />

          {children}

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
