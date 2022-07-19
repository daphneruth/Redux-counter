//import { createStore} from 'redux';
            import {createSlice, configureStore} from '@reduxjs/toolkit';



            //import {redux} from 'react';


            const initialState= {counter: 0, showCounter:true};
            const counterSlice =createSlice({
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




            const store =configureStore({
                reducer:counterSlice.reducer
            })
            export const counterActions = counterSlice.actions;
            export default store;
