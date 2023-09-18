import { card, cardDescription, cardTitle } from "./Card.module.css";

export default function Card({ onClose, name, species, gender, image, id }) {
  const handleClick = () => {
    onClose(id);
  };

  return (
    <article className={card}>
      <div className={cardTitle}>
        <button onClick={handleClick}>X</button>
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
