import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
    </main>
  );
}
