import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

// function to create the redux store
export const ConfigureStore = () => {
    const store = createStore(Reducer, initialState);
    return store;
}