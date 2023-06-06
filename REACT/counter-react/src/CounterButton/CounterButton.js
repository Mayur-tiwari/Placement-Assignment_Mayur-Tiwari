import './CounterButton.css';

const CounterButton=(props)=>{
    return(<div className="container-button">
        <button className='inc' onClick={props.onIncrementHandler}>Increment</button>
        <button className='dec' onClick={props.onDecrementHandler}>Decrement</button>
        <button className='res' onClick={props.onResetHandler}>Reset</button>
    </div>
)}
export default CounterButton;