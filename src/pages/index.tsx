import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { Inter } from "next/font/google";
import { productProps } from "../../type";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  productData: productProps;
}
export default function Home({ productData }: Props) {
  return (
    <main>
      <div className="max-w-screen mx-auto">
        <Banner />
        <Products productData={productData}/>
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
