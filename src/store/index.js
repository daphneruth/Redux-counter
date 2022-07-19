//import { createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';



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
        state.counter =state.counter + action.amount;
    
    },
    toggleCounter(state){
        state.showCounter =!state.showCounter;
    }
}

})




const store=redux.createStore(counterReducer);


export default store;
