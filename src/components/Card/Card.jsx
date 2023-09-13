import { cardItem, cardDescription, cardTitle } from "./Card.module.css";

export default function Card(props) {
  return (
    <article className={cardItem}>
      <div className={cardTitle}>
        <button onClick={props.onClose}>X</button>
        <h2>{props.name}</h2>
      </div>
      <div className={cardDescription}>
        <span>{props.species}</span>
        <span>{props.gender}</span>
      </div>
      <img src={props.image} alt="" />
    </article>
  );
}
