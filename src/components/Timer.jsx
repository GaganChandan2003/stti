import React,{useEffect, useRef, useState} from 'react'
import s from "./watch.module.css";

const Timer = () => {
  const [time, settime] = useState(0);
  const [start, setstart] = useState();
  const first =useRef(null);

  useEffect(()=>
  {
    if(time>0)
    {
      const id=setInterval(()=>
      {
        settime(time-1)
      },1000)
      first.current=id;
    }
    else{
      clearInterval(first.current)
    }

    return ()=>
    {
      clearInterval(first.current);
     
    }
  },[time])
  const stop=()=>
  {
    clearInterval(first.current) ;
  }
  const reset=()=>
  {
    clearInterval(first.current);
    settime(0);
  }
  

  return (
    <>
    <div className={s.timer}>
    <h3>Timer</h3>
    <input type="number" placeholder='Enter Start Time' onChange={(e)=>setstart(e.target.value)} />
     <h1>{time}</h1>
     <hr />
    <button onClick={()=>settime(start)} >Start</button>
    <button onClick={stop}>Stop</button>
    <button onClick={reset}>Reset</button>
    </div>
   
    </>
    
  )
}

export default Timer