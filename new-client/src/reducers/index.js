import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import customerReducer from './customerReducer';
import authReducer from './authReducer';

export default combineReducers({
    product: productsReducer,
    customer: customerReducer,
    auth: authReducer
});