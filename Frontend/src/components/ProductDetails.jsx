import { useParams } from "react-router-dom";
import { useProductStore } from "../store/Store";
import css from "../css/Product.module.css";
import { useEffect, useState } from "react";

export const ProductDetails = () => {
  const { productId } = useParams();
  const products = useProductStore((state) => state.products); // Obtener los productos del almacén
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <div className={css.details_container}>
      <div className={css.details_img}>
        <img src={product.img} alt="details photo" />
      </div>
      <div className={css.details_content}>
        <h1>{product.name}</h1>
        <p className={css.details_price}>Precio: ${product.price}</p>
        <p> {product.description}</p>
      </div>
    </div>
  );
};
