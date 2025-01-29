import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';

const reducers = combineReducers({
    auth: authReducer,
})


// create the store
export const store = configureStore({
    reducer: reducers
});

