import { API_URL } from '../../constants';
import axios from 'axios';
import { FETCH_ADDRESSES, SET_ADDRESS_LOADING } from './constants';
import handleError from '../../utils/error'


export const fetchAddresses = () => {
    return async (dispatch, getState) => {
        try {
            console.log("fetchAddresses from actions")
            dispatch(setAddressLoading(true));
            const response = await axios.get(`${API_URL}/address`);
            console.log("fetchAddresses response", response.data.addresses)
            dispatch({ type: FETCH_ADDRESSES, payload: response.data.addresses });
        } catch (error) {
            handleError(error, dispatch);
        } finally {
            dispatch(setAddressLoading(false));
        }
    };
};

export const setAddressLoading = value => {
    return {
        type: SET_ADDRESS_LOADING,
        payload: value
    };
};
