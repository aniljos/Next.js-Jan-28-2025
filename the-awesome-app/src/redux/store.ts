import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { gadgetsReducer } from './gadgetsReducer';

const reducers = combineReducers({
    auth: authReducer,
    gadgets: gadgetsReducer
})


// create the store
export const store = configureStore({
    reducer: reducers,
    devTools: true
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

