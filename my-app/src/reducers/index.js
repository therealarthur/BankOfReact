import creditsReducer from './Credits';
// import debitsReducer from './Debits'; 
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    // debits: debitsReducer,
    credits: creditsReducer
});

export default allReducers;