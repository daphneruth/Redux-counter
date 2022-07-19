import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import React from 'react';


const Counter = () => {
 const dispatch= useDispatch()
  const counter=useSelector(state =>state.counter);
 // const toggleCounterHandler = () => {};
  const show=useSelector(state=>state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const increaseHandler = () => {
    dispatch({type :'increase', amount: 5})
  }
  
  const decrementHandler = () => {
    dispatch({type:'decrement'})
  }

  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>increment</button>
      <button onClick={increaseHandler}>increase by 5</button>
      <button onClick={decrementHandler}>decrement</button>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
