import creditsReducer from './Credits';
import accountReducer from './Account';
// import debitsReducer from './Debits'; 
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    // debits: debitsReducer,
    credits: creditsReducer,
    accountBalance: accountReducer
});

export default allReducers;