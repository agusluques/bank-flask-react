import React, { useEffect, useState } from 'react';
import './table.scss';

const Table = (props) => {
    const { transactions } = props;

    const [hasFetched, setHasFetched] = useState(props.hasFetched);

    useEffect(()=> {
        setHasFetched(props.hasFetched);
    }, [props.hasFetched])

    const placeholder = transactions.map((tr) => {
        return (
            <tr className={`row-${tr.card_type}`}>
                <td>{tr.id}</td>
                <td>{tr.value}</td>
                <td>{tr.date_created}</td>
            </tr>
        )
    })

    return transactions.length > 0 ?
        <table className='table'>
            <thead>
                <th>Id</th>
                <th>$</th>
                <th>Date</th>
            </thead>
            {placeholder}
        </table> : (hasFetched && <section className='noData'>No data</section>);
};

export default Table;