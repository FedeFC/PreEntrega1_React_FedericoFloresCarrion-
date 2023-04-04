import React, { useEffect, useState } from 'react'
import styles from './quantity.module.scss'

const ItemCount = ({initial,stock,onAdd}) => {

  const [count, setcount] = useState(parseInt(initial))

  const incrementar = () => {
    setcount(count + 1)
  }
  const decrementar = () =>{
    setcount(count - 1) 
   }

  useEffect(() => {
    setcount(parseInt(initial))
  }, [initial])
  
  return (
    <div >
      <p className={styles.texto}>Cantidad</p>
      <div className={styles.cantidades} >
      <button disabled={count <= 1} className={styles.counterD}  onClick={decrementar} >-</button>
      <span className={styles.number}>{count}</span>
      <button disabled={count >= stock} className={styles.counterI} onClick={incrementar}>+</button>
      </div>
        <div>

          <button  className={styles.addCartBtn} disabled={stock <= 0} onClick={ ()=> onAdd(count)} >
            <box-icon name='cart'color='rgb(0,0,0)' ></box-icon>
                 Add to cart
            </button>
        </div>
    </div>
  )
}

export default ItemCount