import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";
function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative">
      <h1 className="bg-white rounded-sm absolute">RANDOM GIFS</h1>
      <div>
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
