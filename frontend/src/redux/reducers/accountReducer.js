import * as actionTypes from '../actions/actionTypes';

const initialState = {};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_MY_ACCOUNT:
            return {
                ...state,
                ...action.response.data
            }
        default:
            return state;
    }
}

export default accountReducer;