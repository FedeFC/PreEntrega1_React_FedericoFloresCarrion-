import React from 'react';
import styles from './navbar.module.scss';
import logo from './images-removebg-preview3.png'
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <div className='contenederoNav'>
            <div className={styles.enviosInfo}> 
                <p>Envío Gratis para compras mayores a $20.000</p>
            </div>

            <nav className={styles.navList}>
              <Link to="/" className={styles.linkNav}>Home </Link>
              <Link to='/puntosDeVenta'  className={styles.linkNav}> Puntos de Venta </Link>
              <Link to='/'> <img src={logo} alt="" height="65" width="75" /> </Link>
              <Link to="/products" className={styles.linkNav}>  Productos </Link>
              <Link to="/contacto" className={styles.linkNav}>  Contacto </Link>
              <Link to='/cart' >
                    <CartWidget/>
              </Link>
                
              
            </nav> 
    </div>
    
  );
}

export default Navbar