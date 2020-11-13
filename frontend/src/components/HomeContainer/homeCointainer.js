import React from 'react';

const HomeContainer = (props) => {
    return (
        <div className="container">
            <div>{props.children}</div>
        </div>
    )
}

export default HomeContainer;