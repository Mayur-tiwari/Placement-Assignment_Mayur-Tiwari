import './CounterInput.css';

const CounterInput = (props) => {

    
    const onChangeInput=(event)=>{
        props.onChangeHandler(parseInt(event.target.value));
    }


        return (<div className = "container">
        <h1>Counter App</h1>
        <input type="number" onChange={onChangeInput} name="counter" />
    </div>)
}

export default CounterInput;