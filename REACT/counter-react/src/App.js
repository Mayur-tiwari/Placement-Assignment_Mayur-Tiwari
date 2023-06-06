import './App.css';
import CounterInput from './CounterInput/CounterInput';
import CounterButton from './CounterButton/CounterButton';
import CounterDisplay from './CounterDisplay/CounterDisplay';
import {useState} from 'react';

function App() {
  const [getCounter,setCounter]=useState(0);

  const onChangeHandler=(input)=>{
    setCounter(input);
  }

  const onIncrementHandler=()=>{
    setCounter(getCounter+1);
  }
  const onDecrementHandler=()=>{
    setCounter(getCounter-1);
  }
  const onResetHandler = () =>{
    setCounter(0);
  }

  return (
    <div className="App">
      <CounterInput onChangeHandler={onChangeHandler} />
      <CounterButton onIncrementHandler={onIncrementHandler} onDecrementHandler={onDecrementHandler} onResetHandler={onResetHandler}/>
      <CounterDisplay counter={getCounter}/>
    </div>
  );
}

export default App;
