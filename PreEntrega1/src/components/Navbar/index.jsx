import React from 'react';
import styles from './navbar.module.scss';
import logo from './logoFinalSinFondo.png'

const Navbar = () => {
  return (

    <div>
        <div className={styles.enviosInfo}> 
            <p>Envío Gratis para compras mayores a $20.000</p>
        </div>
    <nav className={styles.navList}>
        
       
        <a href= "#">
            <img src={logo} alt="" height="40" width="70" />
        </a> 
        <a href="#" className={styles.linkNav}>Inicio</a>
        <a href="#" className={styles.linkNav}>Nosotros</a>
        <a href="#" className={styles.linkNav}>Productos</a>
        <a href="#" className={styles.linkNav}>Contacto</a> 
        <a href="#">
            <div className={styles.navCarrito}>
                <box-icon name='cart'color='rgba(255,255,255,0.89)' ></box-icon>
                <div className={styles.navNumCarrito} >
                    <p>1</p>
                </div>
            </div>
        </a>
    </nav>
    </div>
  );
}

export default Navbar