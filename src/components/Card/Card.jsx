import {
  card,
  cardDescription,
  cardTitle,
  linkImg,
  linkName,
} from "./Card.module.css";

import { Link } from "react-router-dom";

export default function Card({ onClose, name, species, gender, image, id }) {
  return (
    <article className={card}>
      <div className={cardTitle}>
        <button onClick={() => onClose(id)}>X</button>
        <Link className={linkName} to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
      </div>
      <div className={cardDescription}>
        <span>{species}</span>
        <span>{gender}</span>
      </div>
      <Link className={linkImg} to={`/detail/${id}`}>
        <img src={image} alt="" />
      </Link>
    </article>
  );
}
