import css from "../css/Landing.module.css";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();
  const host = import.meta.env.VITE_HOST;
  const handleClick = () => {
    console.log(host);
    navigate("/home");
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
