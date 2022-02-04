import Tile from 'components/Tile';
import { DARK_GRAY, GREEN, YELLOW } from 'util/constants/colors';

function App() {
  return (
    <div className="App">
      <Tile />
      <Tile color={YELLOW} />
      <Tile color={GREEN} />
      <Tile color={DARK_GRAY} />
    </div>
  );
}

export default App;
