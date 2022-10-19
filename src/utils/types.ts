export type Product = {
  products: any;
  map(arg0: (product: Product) => JSX.Element): import("react").ReactNode;
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
