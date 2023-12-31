import Card from "../Card/Card";
import { cardConteiner } from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <section className={cardConteiner}>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            onClose={onClose}
          />
        );
      })}
    </section>
  );
}
