import { useState } from "react";
import { wreaperForm, itemsForm, btn } from "./Form.module.css";

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Login Exitoso");
  };

  return (
    <form className={wreaperForm} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className={itemsForm}>
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleInput}
        />
        <span>{"✅"}</span>
      </div>

      <div className={itemsForm}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleInput}
        />
        <span>{"⛔"}</span>
      </div>
      <button type="submit" className={btn} onClick={handleSubmit}>
        Ingresar
      </button>
    </form>
  );
};

export default Form;
