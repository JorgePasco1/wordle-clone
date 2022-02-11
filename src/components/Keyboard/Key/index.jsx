import PropTypes from 'prop-types';

import Div from './styled';
import characters from '../characters';
import { SpecialCharacters } from 'services/wordleService/constants';

const Key = ({ char, handleClick }) => {
  return <Div onClick={() => handleClick(char)}>{char}</Div>;
};

Key.propTypes = {
  char: PropTypes.oneOf([...characters, SpecialCharacters.BACKSPACE_EMOJI])
    .isRequired,
  handleClick: PropTypes.func,
};

export default Key;
