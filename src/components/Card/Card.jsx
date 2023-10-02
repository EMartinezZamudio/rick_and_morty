import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import {
  card,
  cardDescription,
  cardTitle,
  linkImg,
  linkName,
  btnClose,
  btnFav,
} from "./Card.module.css";
import { useState } from "react";

export default function Card(props) {
  const { onClose, name, species, gender, image, id } = props;

  const myFavorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
  };

  console.log(myFavorites);

  return (
    <article className={card}>
      <div className={cardTitle}>
        <button className={btnClose} onClick={() => onClose(id)}>
          X
        </button>
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
      <button className={btnFav} onClick={handleFavorite}>
        {isFav ? "💖" : "🤍"}
      </button>
    </article>
  );
}
