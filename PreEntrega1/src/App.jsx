import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CardDatail from './components/CardDetail';
import CartWidget from './components/CartWidget';
import CategoryItems from './components/CategoryItems';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import CarritoProvider from './Context/index.jsx';



function App() {
  
  
  const [productos, setProductos] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      setProductos(data)
    } );
    
  }, []);
  

  return (
    
    <div>
      <CarritoProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer productos={productos}/> } />
          <Route path='/products' element={<ItemListContainer productos={productos} /> } />
          <Route path='/item/:id' element={<CardDatail/>}/>
          <Route path='category/:id' element={<CategoryItems/>} />
        </Routes>
      </CarritoProvider>
    </div>
    )
  }

export default App
