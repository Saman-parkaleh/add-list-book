import "./App.css";
import Heder from "./components/Heder";
import Addbooks from "./components/Addbooks";





function App() {
  return (
    <div className="App">
      <div className="heder flex flex-col items-center justify-center">
        <Heder />
        <Addbooks />
        
      </div>
    </div>
  );
}

export default App;
