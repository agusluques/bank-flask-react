import * as actionTypes from '../actions/actionTypes';

const initialState = {
    transactions: []
};

const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_TRANSACTIONS:
            return {
                ...state,
                transactions: action.response.data
            }
        default:
            return state;
    }
}

export default transactionsReducer;