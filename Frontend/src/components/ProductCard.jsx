import css from "../css/Product.module.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ product, brand }) => {
  return (
    <Link to={`/product/${product.id}`} className={css.link}>
      <div className={css.card_container}>
        <h1> {product.name} </h1>
        <div className={css.img_container}>
          <img src={product.img} alt="image product" />
        </div>
        <div className={css.bottom_container}>
          <span> ${product.price}</span>
          <img src={brand} alt="brand image" />
        </div>
      </div>
    </Link>
  );
};
