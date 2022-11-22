import { useReducer } from 'react';
import './useReducer.css';

const initialState = 0;
const reducer = (state, action) => {
    console.log(state, action);
    if(action.type === "INCREMENT") {
        return state + 1;
    }
    if(action.type === "DECREMENT") {
        return state - 1;
    }
    return state;
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>{state}</p>
      <div className="btn">
        <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
      </div>
    </>
  );
};

export default UseReducer;
