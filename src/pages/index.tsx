import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main>
      <div className="max-w-screen mx-auto">
        <Banner />
        <Products />
      </div>
    </main>
  );
}
//SSR for data fetching
export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData } };
};
