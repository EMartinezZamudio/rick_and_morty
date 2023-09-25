import { landing, welcome, title, btn, login } from "./landing.module.css";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";

const Landing = () => {
  return (
    <form className={landing}>
      <div className={welcome}>
        <h2>Bievenidos a la</h2>
        <h1 className={title}>App de Rick and Morty</h1>
        <Link to="/home"></Link>
      </div>
      <div className={login}>
        <Form />
      </div>
    </form>
  );
};

export default Landing;
