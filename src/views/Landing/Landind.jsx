import { landing, title } from "./landing.module.css";

import Form from "../../components/Form/Form";

const Landing = ({ login }) => {
  return (
    <section className={landing}>
      <div className={title}>
        <h2>Bievenidos a la</h2>
        <h1>App de Rick and Morty</h1>
      </div>
      <div>
        <Form login={login} />
      </div>
    </section>
  );
};

export default Landing;
