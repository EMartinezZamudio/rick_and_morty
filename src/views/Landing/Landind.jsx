import { landing, welcome, title, btn } from "./landing.module.css";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <section className={landing}>
      <h2 className={welcome}>Bievenidos a la</h2>
      <h1 className={title}>App de Rick and Morty</h1>
      <NavLink to="/home">
        <button className={btn}>Ingresar</button>
      </NavLink>
    </section>
  );
};

export default Landing;
