import Banner from "@/components/Banner";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="max-w-screen mx-auto">
        <Banner />
      </div>
    </main>
  );
}
