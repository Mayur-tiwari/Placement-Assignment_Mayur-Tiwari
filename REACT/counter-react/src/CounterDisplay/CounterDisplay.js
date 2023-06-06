import './CounterDisplay.css';

const CounterDisplay=(props)=>{
    return(<div className="container-display">
       <h1>{props.counter}</h1>
    </div>)
}
export default CounterDisplay;