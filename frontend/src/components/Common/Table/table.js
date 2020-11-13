import React, { useEffect, useState } from 'react';
import './table.scss';
import Row from '../Row/row';

const Table = (props) => {
    const { transactions } = props;

    const [hasFetched, setHasFetched] = useState(props.hasFetched);

    useEffect(()=> {
        setHasFetched(props.hasFetched);
    }, [props.hasFetched])

    const placeholder = transactions.map((tr) => {
        return (
            <Row transaction={tr}></Row>
        )
    })

    return transactions.length > 0 ?
        <table className='table'>
            <thead>
                <th></th>
                <th>Id</th>
                <th>$</th>
            </thead>
            {placeholder}
        </table> : (hasFetched && <section className='noData'>No data</section>);
};

export default Table;