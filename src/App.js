import { useState } from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';

function App() {
  const [toogle,setToggle]=useState(true);
  console.log(toogle);
  return (
    <div className="App">
      <label>
        <button  onClick={()=>setToggle(true)}>Timer</button>
        <button onClick={()=>setToggle(false)} >StopWatch</button>
      </label>

      <div>{toogle? <Timer/>:<Stopwatch/>}</div>
    </div>
  );
}

export default App;
