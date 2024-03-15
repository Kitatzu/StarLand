import { useState } from "react";
import { axiosUser } from "../utilities/axios";
import css from "../css/User.module.css";
import { useNav } from "../utilities/navigate";

export const Register = () => {
  const { redirectLogin } = useNav();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosUser.post("/register", formData);
      if (response && response.data) {
        console.log("Registro exitoso:");
        redirectLogin();
      } else {
        console.error("Respuesta no válida:", response);
      }
    } catch (error) {
      setError(error.response.data.message); // Captura el mensaje de error del backend
      console.error("Error en el registro:", error);
    }
  };

  return (
    <div className={css.register_container}>
      <h1 className={css.register_title}>Register</h1>
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
          Register
        </button>
        {error && <p className={css.error_message}>{error}</p>}
      </form>
    </div>
  );
};
