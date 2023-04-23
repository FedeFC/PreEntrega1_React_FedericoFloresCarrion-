import React from 'react'
import { userCartContext } from '../../Context'
import styles from './itemCart.module.scss'


const ItemCart = ({product}) => {

    const {removeProduct} =  userCartContext()  
   

  return (
    

      <div className={styles.itemCart}>

              <div className={styles.btnContainer}>
                <button onClick={() => removeProduct(product.id)}>X</button>
              </div>
              <div className={styles.imgContainer}>
                <img src={product.image} alt={product.title} className={styles.imgProduct} />
              </div>
              <div className={styles.itemTitle}>
                <div className={styles.itemTitle2}>     
                  {product.title}
                </div>
              </div>
              <div className={styles.itemPrice}>
                <div> $ {product.price} </div>
              </div>
              <div className={styles.itemQuantity}>
              {product.quantity}
              </div>
              <div className={styles.itemSubtotal}>
              $ {product.quantity * product.price}
              </div>
             
             

      </div>
 


  )
}


    


export default ItemCart