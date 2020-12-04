import { createStore, combineReducers } from 'redux';
import calculatorReducer from './reducer/calculator.reducer';

const rootReducer = combineReducers({
    calculator: calculatorReducer,
});

const store = createStore(rootReducer);

export default store;