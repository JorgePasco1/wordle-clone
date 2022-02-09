import useColorMapping from 'hooks/useColorMapping';
import useGame from 'hooks/useGame';

import Board from 'components/Board';
import Row from 'components/Row';
import Tile from 'components/Tile';

const GameSection = () => {
  const { tiles } = useGame();
  const { getColorByStatus } = useColorMapping();
  return (
    <Board>
      {tiles.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((tile, tileIndex) => (
            <Tile
              key={tileIndex}
              color={getColorByStatus(tile.status)}
              value={tile.character}
            />
          ))}
        </Row>
      ))}
    </Board>
  );
};

export default GameSection;
