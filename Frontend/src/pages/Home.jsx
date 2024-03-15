import css from "../css/Home.module.css";
import { ProductCard } from "../components/ProductCard";
import { useProductStore } from "../store/Store";
import { useEffect } from "react";

export const Home = () => {
  const { fetchProductsAndBrands, products, brands } = useProductStore();
  useEffect(() => {
    fetchProductsAndBrands();
  }, []);

  return (
    <div className={css.home_container}>
      <div className={css.container}>
        <div className={css.title_container}>
          <h1>Productos que pueden ayudarte a alcanzar las estrellas ☄️</h1>
        </div>
        <div className={css.grid_container}>
          {Array.isArray(products) &&
            products.map((product) => {
              const productBrand = brands.find(
                (brand) => brand.id === product.BrandId
              );
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  brand={productBrand ? productBrand.logo_url : ""} // Pasar la información de la marca al componente ProductCard
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
