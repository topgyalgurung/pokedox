
import PropTypes from 'prop-types';

const Pokecard = (props) => {
  return (
    //show a single pokemon with name, image and type
    <div>{props.children}</div>
  );
};

Pokecard.propTypes = {
  children: PropTypes.node
};

export default Pokecard;
