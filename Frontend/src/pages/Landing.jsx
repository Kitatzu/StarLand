import { useProductStore } from "../store/Store";
import css from "../css/Landing.module.css";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const products = useProductStore((state) => state.products);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home"); // Navegación dentro de la transición
  };

  return (
    <div className={css.landing_container}>
      <div className={css.container}>
        <h1> ¿Estas listo para un viaje inolvidable? </h1>
        <button onClick={handleClick}> Despegar 🚀 </button>
      </div>
    </div>
  );
};
