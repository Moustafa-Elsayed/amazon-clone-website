import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="py-10 bg-gray-300">Home Page</div>
    </main>
  );
}
