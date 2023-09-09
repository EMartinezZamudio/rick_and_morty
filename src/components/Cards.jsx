import Card from "./Card";

export default function Cards(props) {
  console.log(props.characters);
  return (
    <div>
      {props.characters.map((character) => {
        return (
          <Card
            key={character.id}
            name={character.name}
            status={character.status}
            gender={character.gender}
            origin={character.origin}
          />
        );
      })}
    </div>
  );
}
