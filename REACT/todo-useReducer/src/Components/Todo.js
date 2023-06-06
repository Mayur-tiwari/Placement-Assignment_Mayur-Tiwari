import React, { useReducer, useState } from 'react';
import {initialState, reducer} from "./Reducer";
import "./Todo.css";

const Todo = () => {

    const [text, setText] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);

    const onAddHandler = () => {
        if(text === "") return;

        dispatch({type: "ADD_TODO",
        payload: {
            id: Math.random(),
            text
        }
    })
    setText("");
    }

    const onDeleteHandler = (id) => {
        dispatch({
            type: "DELETE_TODO",
            payload: id
        })
    }

  return (
    <div className='todo-container'>
        <div className='todo-input'>
        <input type='text' 
        name='todo' 
        placeholder='Your Todo...'
        value={text}
        onChange={(e) => setText(e.target.value)}/>
        <button className='add-btn' onClick={onAddHandler}>Add</button>
        </div>

        {Object.keys(state.todos).length === 0 ? (
            <h3 className='empty'>Todo Empty !!</h3>
        ) : (state.todos.map(item => (
            <div key={item.id} className='todo-list'>
                <ul>
                    <li>
                        {item.text}
                    </li>
                </ul>
            <button className='delete-btn' onClick={() => onDeleteHandler(item.id)}>Delete</button>
            </div>
        )))}
    </div>
  )
}

export default Todo;