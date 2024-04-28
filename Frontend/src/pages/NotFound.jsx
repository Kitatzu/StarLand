import { useNav } from "../utilities/navigate";
import css from "../css/Notfound.module.css";

export const NotFound = () => {
  const { redirectHome } = useNav();

  return (
    <div className={css.container}>
      <div className={css.planet}></div>
      <div className={css.rocket_container}>
        <img src="/rocket.png" alt="rocket" />
      </div>
      <div className={css.error_container}>
        <span> 404</span>
      </div>
      <div className={css.btn_container}>
        <button onClick={redirectHome}> Despegar al INICIO 🚀</button>
      </div>
      <div className={css.text_container}>
        <p>¡Upsss!... Creo que nos Perdimos</p>
      </div>
    </div>
  );
};
