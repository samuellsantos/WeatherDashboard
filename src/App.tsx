import { LeftContainer } from "./components/leftContainer/LeftContainer";
import { Wallpaper } from "./components/leftContainer/Wallpaper";
import { RIghtContainer } from "./components/rightContainer/RIghtContainer";

function App() {

  return (
      <div className="font-Poppins flex flex-col lg:flex-row">
        <Wallpaper />
        <LeftContainer />
        <RIghtContainer />
      </div>
  );
}

export default App;
