// reducer.js
import { FETCH_ADDRESSES, SET_ADDRESS_LOADING, SET_SELECTED_ADDRESS } from "./constants";


const initialState = {
    addresses: [],
    selectedAddress: null,
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

        case SET_SELECTED_ADDRESS:
            return {
                ...state,
                selectedAddress: action.payload,
            };

        default:
            return state;
    }
};

export default orderAddressReducer;