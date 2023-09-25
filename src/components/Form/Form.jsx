import { form } from "./Form.module.css";

const Form = () => {
  return (
    <form className={form}>
      <label htmlFor="">email:</label>
      <input type="email" />

      <label htmlFor="password">password:</label>
      <input type="password" />
    </form>
  );
};

export default Form;
