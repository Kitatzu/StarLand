import { useState } from "react";
import { axiosUser } from "../utilities/axios";
import css from "../css/User.module.css";
import { useUserStore } from "../store/Store";
import { useNav } from "../utilities/navigate";

export const Login = () => {
  const { redirectHome } = useNav();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const setToken = useUserStore((state) => state.setToken);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await axiosUser.post("/login", formData);

      if (response && response.data && response.data.loginToken) {
        console.log("Inicio de sesión exitoso:", response.data);
        setToken(response.data.loginToken); // Guardar el token en el estado de Zustand
        redirectHome();
      } else {
        console.error("Respuesta no válida:", response);
      }
    } catch (error) {
      setError(error.response.data.message); // Captura el mensaje de error del backend
      console.error("Error en el inicio de sesión:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin();
  };

  return (
    <div className={css.register_container}>
      <h1 className={css.register_title}>Login</h1>
      <form className={css.container} onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={css.form_input} // Agregar clase de estilo
        />
        <label htmlFor="password">Password:</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={css.form_input} // Agregar clase de estilo
        />
        <button
          type="button"
          onClick={handleTogglePassword}
          className={css.toggle_button}
        >
          {showPassword ? "Hide" : "Show"} Password
        </button>
        <button type="submit" className={css.reg_btn}>
          Login
        </button>
        {error && <div className={css.error_message}>{error}</div>}
      </form>
    </div>
  );
};
