import depImage from "./dependencies.jpg";
import './App.css';
import StatusCheck from './StatusCheck';

function App() {
  return (
    <div className="App">
      <div>
        <span>Dependencies</span>
      </div>
      <div>
        <img src={depImage}/>
      </div>
      <StatusCheck />
    </div>
  );
}

export default App;
