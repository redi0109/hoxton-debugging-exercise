import { Product as ProductType } from "../../utils/types";
import Product from "../Product";
import "./style.css";

type Props = {
  products: ProductType[] | null;
};

const ProductList = (props: { product: null; products: ProductType; }) => {
  if (props.product === null) {
    return <p>Products cannot be displayed!</p>;
  }
  return (
    <div>
      <ul>
      {props.products.map((product: ProductType) => (
        <li>
        <Product product={product} />
        </li>
      ))}
      </ul>
    </div>
  );
};

export default ProductList;
