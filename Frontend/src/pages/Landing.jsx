import css from "../css/Landing.module.css";
import { useNavigate } from "react-router-dom";
import Atropos from "atropos/react";

export const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className={css.landing_container}>
      <div className={css.title_container}>
        <h1> ¿Estas listo </h1>
        <span> para despegar?</span>
        <button onClick={handleClick}> DESPEGUE 🚀 </button>
      </div>
      <div className={css.text_container}>
        <p> ¡Te espera </p>
        <p> un viaje</p>
        <p>inolvidable!</p>
      </div>
    </div>
  );
};
