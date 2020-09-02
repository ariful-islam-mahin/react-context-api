import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import { useState } from 'react';
import { createContext } from 'react';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState('laptop');

  const[count, setCount] = useState(0);
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <h2>This is App: {category}</h2>
      <Header></Header>
      <Home></Home>
      <Shipment count={count} setCount={setCount}></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
