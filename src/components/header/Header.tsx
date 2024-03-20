import Image from "next/image";
import logo from "../../images/logo.png";
import cartIcon from "../../images/cartIcon.png";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { StoreProduct, stateProps } from "../../../type";
import { useEffect, useState } from "react";
import SearchProducts from "../SearchProducts";
import { UserButton, useUser } from "@clerk/nextjs";
import { IoMdClose } from "react-icons/io";
import { tree } from "next/dist/build/templates/app-page";
const Header = () => {
  const { user } = useUser();
  const [allData, setAllData] = useState([]);
  const { productData, favoriteData, allProducts } = useSelector(
    (state: stateProps) => state.next
  );

  useEffect(() => {
    if (allProducts && allProducts.allProducts) {
      setAllData(allProducts.allProducts);
    }
  }, [allProducts]);

  // Search area
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (allData.length > 0) {
      const filtered = allData.filter((item: StoreProduct) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [allData, searchQuery]);

  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        {/* logo */}
        <Link
          href={"/"}
          className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]"
        >
          <Image className="w-28 object-cover mt-1" src={logo} alt="logoImg" />
        </Link>
        {/* delivery */}
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
          <SlLocationPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">USA</p>
          </div>
        </div>
        {/* serchbar */}
        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input
            onChange={handleSearch}
            value={searchQuery}
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
            type="text"
            placeholder="Search next_amazon_yt products"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
          {/* ========== Searchfield ========== */}
          {searchQuery && (
            <>
              <div className="absolute left-0 top-12 w-full mx-auto max-h-96 bg-gray-200 rounded-lg overflow-y-scroll cursor-pointer text-black">
                {/* <IoMdClose
                  onClick={() => setSearchQuery(true)}
                  className=" absolute top-0 right-0 mt-1 text-2xl text-red-700"
                /> */}
                {filteredProducts.length > 0 ? (
                  <>
                    {searchQuery &&
                      filteredProducts.map((item: StoreProduct) => (
                        <Link
                          key={item._id}
                          className="w-full border-b-[1px] border-b-gray-400 flex items-center gap-4"
                          href={{
                            pathname: `${item._id}`,
                            query: {
                              _id: item._id,
                              brand: item.brand,
                              category: item.category,
                              description: item.description,
                              image: item.image,
                              isNew: item.isNew,
                              oldPrice: item.oldPrice,
                              price: item.price,
                              title: item.title,
                            },
                          }}
                          onClick={() => setSearchQuery("")}
                        >
                          <SearchProducts item={item} />
                        </Link>
                      ))}
                  </>
                ) : (
                  <div className="bg-gray-50 flex items-center justify-center py-10 rounded-lg shadow-lg">
                    <p className="text-xl font-semibold animate-bounce">
                      Nothing is matches with your search keywords. Please try
                      again!
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
          {/* ========== Searchfield ========== */}
        </div>
        {/* sign in */}
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <Link
            href={"/sign-in"}
            className=" text-xs flex-col px-2 border border-transparent hover:border-white  items-center justify-center h-[70%] duration-300 cursor-pointer flex gap-1"
          >
            <p>Hello,Sign in</p>
            <p className="flex justify-between items-center font-bold  text-white">
              Account,Lists
              <BiCaretDown />
            </p>
          </Link>
        )}
        {/* fovorite */}
        <Link
          href={"/favorite"}
          className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <p>Marked</p>
          <p className="text-white font-bold">&Favorite</p>
          {favoriteData.length > 0 && (
            <span className="absolute right-2 top-3 md:top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow">
              {favoriteData.length}
            </span>
          )}
        </Link>
        {/* cart */}
        <Link
          href={"/cart"}
          className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <Image
            className="w-auto object-cover h-8"
            src={cartIcon}
            alt="cartImg"
          />
          <p className="text-xs text-white font-bold mt-3">Cart</p>
          <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
            {productData ? productData.length : 0}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
