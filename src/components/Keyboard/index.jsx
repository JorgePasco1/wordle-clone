import Key from './Key';
import characters from './characters';
import Div from './styled';

const Keyboard = ({ handler }) => {
  return (
    <Div>
      {characters.map((char) => (
        <Key
          key={char}
          char={char === 'backspace' ? '⏪' : char}
          handleClick={handler}
        />
      ))}
    </Div>
  );
};

export default Keyboard;
