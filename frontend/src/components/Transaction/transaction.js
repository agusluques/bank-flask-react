import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actions/index';
import './transaction.scss';

import Table from '../Common/Table/table';

const Transaction = (props) => {
    const [hasFetched, setHasFetched] = useState(false);

    return (
        <section className='transaction'>
            <section className='header'>
                <button className="btn btn-primary" onClick={() => {
                        setHasFetched(true);
                        props.getTransactions(1)
                    }}>My Transactions</button>
                <section>
                    <section><span className='credit-dot' /> Credit</section>
                    <section><span className='debit-dot' /> Debit</section>
                </section>
            </section>
            <Table transactions={props.transactions} hasFetched={hasFetched}></Table>
        </section>
    )
};

const mapStateToProps = (state) => {
    return {
        transactions: state.transactionStore.transactions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTransactions: (account_id) => dispatch(actionCreators.getAllTransactions(account_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);