import PropTypes from 'prop-types';

import useColorMapping from 'hooks/useColorMapping';

import Board from 'components/Board';
import Row from 'components/Row';
import Tile from 'components/Tile';

const Wordle = ({ tiles }) => {
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

Wordle.propTypes = {
  tiles: PropTypes.array,
};

export default Wordle;
