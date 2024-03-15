import { useNav } from "../utilities/navigate";
import css from "../css/Nav.module.css";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const { redirectHome, redirectAdmin, redirectLogin, redirectRegister } =
    useNav();

  const location = useLocation();

  if (location.pathname !== "/") {
    return (
      <header className={css.header_container}>
        <div className={css.img_container}>
          <img src="/launch.png" alt="Launch Special Spaceship" />
        </div>
        <nav className={css.nav_container}>
          <a href="#" onClick={redirectHome}>
            Home
          </a>
          <a href="#" onClick={redirectRegister}>
            Register
          </a>
          <a href="#" onClick={redirectLogin}>
            Login
          </a>
          <a href="#" onClick={redirectAdmin}>
            Admin
          </a>
        </nav>
      </header>
    );
  }
};
