//import { createStore} from 'redux';
import {createSlice} from '@reduxjs/toolkit';

const redux = require('redux');

//import {redux} from 'react';


const initialState= {counter: 0, showCounter:true};
createSlice({
    name:'counter',
    initialState,
    reducers: {
        increment(state){
            state.counter++;
        
        },
        decrement(state){
            state.counter--;
        
        
    },
    increase(state, action){
        state.counter =state.counter + counter.amount;
    
    

})


const counterReducer = (state = initialState, action) => {

    if (action.type ==='increment') {
        return{
            counter : state.counter + 1,
            showCounter:state.showCounter
        }

    }

    if (action.type ==='increase') {
        return{
            counter : state.counter +action.amount,
            showCounter:state.showCounter
        
        }
    }

    if (action.type ==='decrement') {
        return{
            counter : state.counter - 1,
            showCounter:state.showCounter
        
        }
    }

        if (action.type ==='toggle') {
            return{
                
                showCounter:!state.showCounter,
                counter:state.counter
            }    
    }
return state;
   
}
const store=redux.createStore(counterReducer);


export default store;
