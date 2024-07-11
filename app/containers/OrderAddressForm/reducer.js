// reducer.js
import { FETCH_ADDRESSES, SET_ADDRESS_LOADING } from "./constants";


const initialState = {
    addresses: [],
};

const orderAddressReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ADDRESSES:
            return {
                ...state,
                addresses: action.payload,
            };
        // Handle other actions...
        case SET_ADDRESS_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};

export default orderAddressReducer;