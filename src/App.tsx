import GamesInfo from "./components/GamesInfo";
import Model from "./components/Model";
import { games } from "./data/data";

const App = () => {
  return (
    <Model>
      <GamesInfo data={games} />
    </Model>
  );
};

export default App;
