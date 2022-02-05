import Board from 'components/Board';
import Row from 'components/Row';
import Tile from 'components/Tile';
import useColorMapping from 'hooks/useColorMapping';
import useGame from 'hooks/useGame';

function App() {
  const game = useGame();
  const [getColorByStatus] = useColorMapping();
  return (
    <div className="App">
      <Board>
        {game.board.tiles.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((tile, tileIndex) => (
              <Tile key={tileIndex} color={getColorByStatus(tile.status)} />
            ))}
          </Row>
        ))}
      </Board>
    </div>
  );
}

export default App;
