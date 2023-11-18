import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import {
  wrapperCard,
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
  const { onClose, id, name, origin, status, image, species, gender } = props;

  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const { pathname } = useLocation();

  const handleFavorite = () => {
    const character = { id, name, origin, status, image, species, gender };
    isFav ? dispatch(removeFav(id)) : dispatch(addFav(character));
    setIsFav(!isFav);
  };

  useEffect(() => {
    if (myFavorites.length) {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    }
  }, [myFavorites]);

  return (
    <div className={wrapperCard}>
      <article className={card}>
        <div className={cardTitle}>
          {pathname !== "/favorites" && (
            <button className={btnClose} onClick={() => onClose(id)}>
              X
            </button>
          )}
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
    </div>
  );
}
