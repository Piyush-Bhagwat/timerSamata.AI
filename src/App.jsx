
import './App.css';
import Timer from './Components/Timer';

function App() {
  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <h3>By Piyush Bhagwat</h3>


      <div className="timer-container">
        <Timer />

        <div className="controls">
          <button className='btn start'>Start</button>
          <button className='btn pause'>Pause</button>
          <button className='btn reset'>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
