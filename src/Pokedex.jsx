import Pokecard from "./Pokecard";
import PropTypes from "prop-types";

const Pokedex = ({ pokemon, totalExp, isWinner }) => {
  return (
    <div className={`container ${isWinner ? "winner" : ""}`}>
      {pokemon.map(({ id, name, type, base_experience }) => {
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return (
          <div className="card" key={id}>
            <Pokecard key={id}>
              <h3>{name}</h3>
              <img src={imageUrl} alt={name} />
              <p>Type: {type}</p>
              <p>EXP: {base_experience}</p>
            </Pokecard>
          </div>
        );
      })}
      <p>Total experience: {totalExp}</p>
      {isWinner && <h2 className="winner-text"> THIS 🤲 WINS!</h2>}
    </div>
  );
};
Pokedex.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      base_experience: PropTypes.number.isRequired,
    })
  ).isRequired,
  totalExp: PropTypes.number.isRequired,
  isWinner: PropTypes.bool.isRequired,
};

export default Pokedex;
