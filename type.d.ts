export interface productProps {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
}
export interface StoreProduct {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}
export interface Metadata {
  title: string,
  description: string,
}
export interface stateProps {
  productData: [],
  favoriteData: [],
  allProducts: [],
  userInfo: null | string,
  next:any
}