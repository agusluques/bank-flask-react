import * as actionsTypes from './actionTypes';

export const getAllTransactions = (account_id) => {
    return {
        type: actionsTypes.GET_ALL_TRANSACTIONS,
        meta: {
            api: {
                method: 'GET',
                url: `/accounts/${account_id}/transactions/`
            }
        }
    }
}