import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actions/index';
import './about.scss';

const About = (props) => {
    useEffect(() => {
        props.getAccount(1);
    }, [])

    return (
        <section className='about'>
            <button className='btn-secondary' onClick={() => props.getAccount(1)}>Refresh Account Details</button>
            <div><b>Account Id:</b> {props.account.id}</div>
            <div><b>User Id:</b> {props.account.user_id}</div>
            <div><b>Balance:</b> {props.account.balance}</div>
        </section>
    )
};

const mapStateToProps = (state) => {
    return {
        account: state.accountStore
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAccount: (account_id) => dispatch(actionCreators.getMyAccount(account_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);