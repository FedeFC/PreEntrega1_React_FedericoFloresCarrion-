import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { CarritoContex } from '../../Context/index.jsx'
import styles from './card.module.scss'

const Card = ({producto}) => {


  // const nombre = useContext(CarritoContex)
  // console.log('item',nombre)


  return (
    <Link to={`/item/${producto.id}`} style={{textDecoration:'none'}} >
      <div className={styles.cardContainer}>
          <h3> {producto.title}</h3>
          <img src={producto.image} alt={producto.title} className={styles.imagenes} width='200' height='200' />
          <div className={styles.preciosContainer}>
              <p className={styles.precios}>$ {producto.price} </p>
          </div>
            <button className={styles.detallesBtn} >Más detalles</button>
      </div>
    </Link>
  )
}

export default Card 