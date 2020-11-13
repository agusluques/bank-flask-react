import { combineReducers } from 'redux'
import transactionsReducer from './reducers/transactionsReducer';
import accountReducer from './reducers/accountReducer';

const RootReducer = combineReducers({
   transactionStore: transactionsReducer,
   accountStore: accountReducer
})

export default RootReducer
