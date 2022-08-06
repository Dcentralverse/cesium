import { Globe, Scene, Viewer } from "resium";

function App() {
  return (
    <div className="App">
      <Viewer>
        <Scene />
        <Globe />
      </Viewer>
    </div>
  );
}

export default App;
