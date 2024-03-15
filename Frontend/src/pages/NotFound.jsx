import { useNav } from "../utilities/navigate";
import css from "../css/Notfound.module.css";

export const NotFound = () => {
  const { redirectHome } = useNav();

  return (
    <div className={css.container}>
      <h1> Upsss... creo que nos estrellamos!</h1>
      <button onClick={redirectHome}> Despegar a INICIO 🚀</button>
    </div>
  );
};
