import React from 'react';
import styles from './navbar.module.scss';
import logo from './images-removebg-preview3.png'
import CartWidget from '../CartWidget';

const Navbar = () => {
  return (

    <div>
        <div className={styles.enviosInfo}> 
            <p>Envío Gratis para compras mayores a $20.000</p>
        </div>
    <nav className={styles.navList}>
        
        <a href="#" className={styles.linkNav}>Nosotros</a>
        <a href="#" className={styles.linkNav}>Puntos de Venta</a>
       
        <a href= "#">
            <img src={logo} alt="" height="65" width="75" />
        </a> 
        <a href="#" className={styles.linkNav}>Productos</a>
        <a href="#" className={styles.linkNav}>Contacto</a> 
        <a href="#">
            <CartWidget/>
        </a>
    </nav>
    </div>
  );
}

export default Navbar