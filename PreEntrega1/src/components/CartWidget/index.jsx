import React from 'react'
import styles from './carrito.module.scss'

const CartWidget = () => {
  return (
    <div className={styles.navCarrito}>
        <box-icon name='cart'color='rgba(255,255,255,0.89)' ></box-icon>
        <div className={styles.navNumCarrito} >
            <p>1</p>
        </div>
    </div>
  )
}

export default CartWidget