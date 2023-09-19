import { card, cardDescription, cardTitle } from "./Card.module.css";

export default function Card({ onClose, name, species, gender, image, id }) {
  return (
    <article className={card}>
      <div className={cardTitle}>
        <button onClick={() => onClose(id)}>X</button>
        <h2>{name}</h2>
      </div>
      <div className={cardDescription}>
        <span>{species}</span>
        <span>{gender}</span>
      </div>
      <img src={image} alt="" />
    </article>
  );
}
