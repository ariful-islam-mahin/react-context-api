import React from 'react';

const CategoryDetail = (props) => {
    const {name} = props.product;
    return (
        <div>
            <h4>This is Category Detail</h4>
            <p>Select Product: {name}</p>
        </div>
    );
};

export default CategoryDetail;