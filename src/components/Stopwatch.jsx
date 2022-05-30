import React ,{useState,useRef} from 'react'
import s from "./watch.module.css"

const Stopwatch = () => {
 const [toogle, setToogle] = useState(true);
 const [watch, setwatch] = useState(0);
 const first = useRef(0)
 

 
    const start=()=>
    {
      const id=setInterval(()=>
      {
        setwatch((prev)=>prev+10)
      },10)
      first.current=id;
      return () => {
       clearInterval(first.current)
      }
    }

    const stop=()=>
    {
      clearInterval(first.current);
    }
    const reset=()=>
    {
      setwatch(0);
      clearInterval(first.current)
    }
 

    
    

 
  return (
    <div className={s.stop}>
      <h3>StopWatch</h3>
      <h1><span>{("0" + Math.floor((watch / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((watch / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((watch / 10) % 100)).slice(-2)}</span></h1>
        <hr />
      <button onClick={()=>toogle? setToogle(false)+start() :setToogle(true)+stop()}>{toogle? "Start":"Stop"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch