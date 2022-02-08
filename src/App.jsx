import GameSection from 'sections/home/GameSection';
import { GameContextProvider } from 'context/GameContext';

const App = () => {
  return (
    <GameContextProvider>
      <div className="App">
        <GameSection />
      </div>
    </GameContextProvider>
  );
};

export default App;
