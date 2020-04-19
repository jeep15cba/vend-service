import axios from 'axios';
import { FETCH_PRODUCTS, FETCH_CUSTOMERS, FETCH_USER } from './types';

export const fetchProducts = () => async dispatch => {
    const res = await axios.get('/api/getproducts');
    
    dispatch({ type: FETCH_PRODUCTS, payload: res.data.data });
};

export const fetchCustomers = () => async dispatch => {
    const res = await axios.get('/api/getcustomers');
    
    dispatch({ type: FETCH_CUSTOMERS, payload: res.data.data });
};

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token, amount, description, jobs) => async dispatch => {
    const res = await axios.post('api/stripe', {token, amount, description, jobs});
    
    dispatch({ type: FETCH_USER, payload: res.data });
}
