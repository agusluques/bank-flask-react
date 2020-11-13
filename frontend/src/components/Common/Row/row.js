import React, { useState } from 'react';
import './row.scss';

const Row = (props) => {
    const { transaction } = props;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <tr className={`row-${transaction.card_type}`}>
                <button onClick={() => setIsExpanded(!isExpanded)} className='btn btn-outline-primary expanded'>
                    {isExpanded ? 
                        '-' :
                        '+'
                        }
                </button>
                <td>{transaction.id}</td>
                <td>{transaction.value}</td>
            </tr>
            {isExpanded &&
                <tr>
                    <td colSpan="3">
                        <div>
                            Date: {transaction.date_created} <br/>
                            Type: {transaction.card_type}
                        </div>
                    </td>
                </tr>
            }
        </>
    )
}

export default Row;