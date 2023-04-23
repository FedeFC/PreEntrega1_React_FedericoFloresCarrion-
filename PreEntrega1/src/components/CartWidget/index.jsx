import React, { useContext } from 'react'
import styles from './carrito.module.scss'
import { userCartContext } from '../../Context'

const CartWidget = () => {


  const {totalProducts} = userCartContext();

  return (
    <div className={styles.navCarrito}>
        <box-icon name='cart'color='rgba(255,255,255,0.89)' ></box-icon>
        <div className={styles.navNumCarrito} >
            <p>{totalProducts() || ''}</p>
        </div>
    </div>
  )
}

export default CartWidget