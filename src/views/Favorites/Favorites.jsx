import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";

const Favorites = () => {
  const characters = useSelector((state) => state.myFavorites);

  return <Cards characters={characters} />;
};

export default Favorites;
