import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card'
// import Card from '../Card'
import style from './products.module.scss'

const ItemListContainer = ({productos}) => {

  return (
    <div>
        <nav className={style.navProducts}>
            <Link to='/category/electronics'>Electronics</Link>
            <Link to="/category/women's clothing">Women's clothing</Link>
            <Link to='/category/jewelery'>Jewelery</Link>
            <Link to="/category/men's clothing">Men's clothing</Link>

        </nav> 
      
       {productos.map((producto)=>(
       <Card key={producto.id} producto={producto} />))}
    </div>
  )
}

export default ItemListContainer