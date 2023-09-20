import Cards from "../../components/Cards/Cards";
import PropTypes from "prop-types";

const Home = ({ characters, onClose }) => {
  return <Cards characters={characters} onClose={onClose} />;
};

export default Home;

Home.propTypes = {
  characters: PropTypes.array,
  onClose: PropTypes.func,
};
