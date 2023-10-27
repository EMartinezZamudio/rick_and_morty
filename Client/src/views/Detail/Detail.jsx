import { useEffect, useState } from "react";
import { details, charImg, description } from "./Detail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/characters/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => window.alert(error.response.data));
    return setCharacter({});
  }, [id]);

  const { name, status, species, gender, origin, image } = character;

  return (
    <section className={details}>
      <div>
        <img className={charImg} src={image} alt="char-image" />
      </div>
      <div className={description}>
        <h1>{name}</h1>
        <p>
          Status: <span>{status}</span>
        </p>
        <p>
          Species: <span>{species}</span>
        </p>
        <p>
          Gender: <span>{gender}</span>
        </p>
        {origin && (
          <p>
            Origin: <span>{origin}</span>
          </p>
        )}
      </div>
    </section>
  );
};

export default Detail;
