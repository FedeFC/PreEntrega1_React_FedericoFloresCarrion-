import { createContext, useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import CardDatail from './components/CardDetail';
import Cart from './components/Cart'
import CategoryItems from './components/CategoryItems';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import CarritoProvider from './Context/index.jsx'; 
import './firebase/config'
import { collection, getDocs, getFirestore } from 'firebase/firestore';

function App() {
  
  
  const [productos, setProductos] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'products');
    getDocs(queryCollection)
      .then(res => setProductos(res.docs.map(product =>({id: product.id, ...product.data() }))))
  
  },[id])
  
  

  return (
    
    <div>
      <CarritoProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer productos={productos}/> } />
          <Route path='/products' element={<ItemListContainer productos={productos} /> } />
          <Route path='/item/:id' element={<CardDatail/>}/>
          <Route path='category/:id' element={<CategoryItems/>} />
          <Route path='/cart' element ={<Cart/>} />
        </Routes>
      </CarritoProvider>
    </div>
    )
  }

export default App
