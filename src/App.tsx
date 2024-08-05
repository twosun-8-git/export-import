import { Hoge, Fuga, Piyo } from "./namedExport";
import { HogeDef, FugaDef, PiyoDef } from "./defaultExport";

function App() {
  return (
    <div className="App">
      <p>default export</p>
      <HogeDef />
      <FugaDef />
      <PiyoDef />
      <hr />
      <p>named export</p>
      <Hoge />
      <Fuga />
      <Piyo />
    </div>
  );
}

export default App;
