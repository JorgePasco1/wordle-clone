import Keyboard from 'components/Keyboard';
import Wordle from 'components/Wordle';
import Section from './styled';

import useGame from 'hooks/useGame';

const GameSection = () => {
  const { tiles, handleVirtualKeyPress } = useGame();

  return (
    <Section>
      <Wordle tiles={tiles} />
      <Keyboard handler={handleVirtualKeyPress} />
    </Section>
  );
};

export default GameSection;
