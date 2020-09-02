import React, { useContext } from 'react';
import Categories from '../Categories/Categories';
import { CategoryContext } from '../../App';

const Home = () => {
    const category = useContext(CategoryContext)
    return (
        <div style={{border:'1px solid gray', margin:'10px 0px'}}>
            <h2>This is Home: {category}</h2>
            <Categories></Categories>
        </div>
    );
};

export default Home;