import React from 'react';

const config = (props) => {
    return (
        <div style={{
            border: '2px solid blue',
            margin: '5px'
        }}>
            <ul>
                <li>Price: {props.price}</li>
                <li>Steps:{props.steps}</li>
            </ul>
        </div>
    );
};

export default config;