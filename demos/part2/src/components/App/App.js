import { useState } from 'react';
import './App.css';
import Display from 'components/Display/Display';
import Button from 'components/Button/Button';


const App = () => {
  const [ counter,setCounter ] = useState(0)

  const increaseByOne =()=>{
    setCounter(counter+1);
  }
  const decreasByOne = ()=>{
    setCounter(counter-1);
  }
  const reset = ()=>{
    setCounter(0);
  }
  return (
    <div>
      <Display counter={counter}/>
      <Button text = {"increase"} handler={increaseByOne}/>
      <Button text={"decrease"} handler={decreasByOne}/>
      <Button text={"reset"} handler={reset}/>
    </div>
  )
}

export default App;
