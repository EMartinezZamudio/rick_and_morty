//* componentes
import Cards from "../../components/Cards/Cards";

//* hooks
import { useDispatch, useSelector } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";
import { useState } from "react";

//* estilos
import {
  wrapperFav,
  wrapperSelects,
  selectItems,
} from "./Favorites.module.css";

const Favorites = () => {
  const characters = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <section className={wrapperFav}>
      <div className={wrapperSelects}>
        <div className={selectItems}>
          <span>Ordenar:</span>
          <select name="order" onChange={handleOrder}>
            <option>Orden</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
        </div>
        <div className={selectItems}>
          <span>Filtrar:</span>
          <select name="filter" onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknow">unknow</option>
          </select>
        </div>
      </div>
      <Cards characters={characters} />
    </section>
  );
};

export default Favorites;
