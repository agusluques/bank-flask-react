import * as actionsTypes from './actionTypes';

export const getMyAccount = (account_id) => {
    return {
        type: actionsTypes.GET_MY_ACCOUNT,
        meta: {
            api: {
                method: 'GET',
                url: `/accounts/${account_id}/`
            }
        }
    }
}