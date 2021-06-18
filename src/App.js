import itzy from "./idol/itzy.json";
import Header from "./components/Header";
import Contents from "./components/Contents";
import './Style/body.css';

function App() {
  return (
    <div className="body">
      <Header />
      <Contents />
    </div>
  );
}

export default App;
