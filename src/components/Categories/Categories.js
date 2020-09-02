import React, { useContext, useEffect } from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import { CategoryContext } from '../../App';
import fakeData from '../../fakeData/fakeData'
import { useState } from 'react';

const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const matchedProduct = fakeData.filter(pd => pd.category === category);
        setProducts(matchedProduct)
    }, [category])
    return (
        <div>
            <h3>Select your category: {category}</h3>
            {
                products.map(pd => <CategoryDetail product={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;