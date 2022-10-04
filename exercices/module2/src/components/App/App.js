import { useState } from 'react';
import './App.css';
import Display from 'components/Display/Display';
import Button from 'components/Button/Button';


const App = () => {
  const [ counter,setCounter ] = useState(0)

  const changeCount = (delta)=>{
    setCounter(counter+delta);
  }
  
  return (
    <div>
      <Display counter={counter}/>
      <Button text = {"increas"} onClick={changeCount} delta={1} />
      <Button text={"decrease"} onClick={changeCount} delta={-1}/>
      <Button text={"reset"} onClick={changeCount} delta={-counter}/>
    </div>
  )
}

export default App;
