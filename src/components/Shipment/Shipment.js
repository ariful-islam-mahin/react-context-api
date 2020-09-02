import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = ({count, setCount}) => {
    // const{count, setCount} = props;
    return (
        <div>
            <h2>This is Shipment: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment from Shipment</button>
        </div>
    );
};

export default Shipment;