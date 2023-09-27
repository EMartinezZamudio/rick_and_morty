import { useState } from "react";
import { wreaperForm, itemsForm, btn } from "./Form.module.css";
import dataValidation from "./validation";

const Form = ({ login }) => {
  const [focus, setFocus] = useState("");

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    const newErrors = dataValidation({ ...userData, [property]: value });

    setUserData({ ...userData, [property]: value });
    setErrors({ ...errors, ...newErrors });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errors.name && !errors.password) {
      login(userData);
      setUserData({
        email: "",
        password: "",
      });
    } else alert("Llene todos los campos correctamente");
  };

  const handleFocus = (event) => {
    setFocus(event.target.name);
  };

  return (
    <form className={wreaperForm} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className={itemsForm}>
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInput}
          onFocus={handleFocus}
        />
        <span>{focus === "email" && errors.email}</span>
      </div>

      <div className={itemsForm}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInput}
          onFocus={handleFocus}
        />
        <span>{focus === "password" && errors.password}</span>
      </div>
      <button type="submit" className={btn}>
        Ingresar
      </button>
    </form>
  );
};

export default Form;
