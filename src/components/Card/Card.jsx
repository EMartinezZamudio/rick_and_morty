import { cardItem } from "./Card.module.css";

export default function Card(props) {
  return (
    <article className={cardItem}>
      <button onClick={props.onClose}>X</button>
      <h2>{props.name}</h2>
      <span>{props.species}</span>
      <span>{props.gender}</span>
      {<img src={props.image} alt="" />}
    </article>
  );
}
