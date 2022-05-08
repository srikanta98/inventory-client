import React from 'react';

const Myitem = ({order}) => {
    const {_id, name, img, description, price} = order;
    return (
        <div>
            <h2>Name:{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
        </div>
    );
};

export default Myitem;