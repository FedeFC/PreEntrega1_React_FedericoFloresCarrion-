import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react'
import styles from './Cart.module.scss'
import { Link } from 'react-router-dom';
import { userCartContext } from '../../Context'
import ItemCart from '../ItemCart';
import { useForm } from 'react-hook-form';


    

const Cart = () => {

   const {cart, totalPrice}  = userCartContext();

    if (cart.length === 0){
        return  (
            <>
                <div className={styles.cartAlert}>
                  <i class='bx bx-cart-add bx-lg-'></i>
                  <p>
                    Tu carrito esta vacio
                  </p>
                  <div className={styles.description} >
                      Antes de continuar con el pago, debe agregar algún producto a su carrito de compras.
                      <br />
                      Encontrará muchos productos interesantes en nuestra página "Productos".			
                  </div>
                  <Link to='/products' className={styles.btn}>Volver a la tienda </Link>
                 
                </div>
            </>
        );
    }
   

    // ORDEN DE COMPRA
    const { register, handleSubmit } = useForm()
    
    const [order, setOrder] = useState({
      buyer: {
        name: "",
        apellido: "",
        email: "",
        phone: "",
        addres: "",
      },
      items: cart.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
      })),
      total: totalPrice(),
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setOrder({
        ...order,
        buyer: {
          ...order.buyer,
          [name]: value,
        },
      });
    };


    const handleClick = () =>{

      const db = getFirestore()
      const orderCollection = collection(db, 'orders')
      addDoc(orderCollection,order)
      .then(({id}) => console.log(id))   
      


    }
    
   
  return (
  
    <>
    <div className={styles.contenedorAbuelo}> 
      <div className={styles.contenedorPadre}>
        
        <div className={styles.itemsCart}>
          {
            
            cart.map(producto => <ItemCart key={producto.id} product={producto}/>)
          } 
                    
          <div className={styles.totalPriceContainer}>
          
            <p>
              TOTAL: <span>$ {totalPrice()}</span>
            </p>
          </div>
          
          <div className={styles.btonContainer}>
          <Link to='/products'>
            <button>Ver mas productos</button>
          </Link>         
          </div>  
        
        </div>
        <div className={styles.formCheckout}>
          <h2>Checkout</h2>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(handleClick)}>
              <div className={styles.abuelo}>
                <div className={styles.inputContainer}>
                  <label>Nombre</label>
                  <input type="text" class='name' name="name" onChange={handleInputChange} />
                </div>
                <div className={styles.inputContainer}>
                  <label>Apellido</label>
                  <input type="text" {...register('apellido')}  class='apellido'  name="apellido" onChange={handleInputChange} />
                </div>
                <div className={styles.inputContainer}>
                  <label>Teléfono</label>
                  <input type="number" {...register('phone')}  class='phone' name="phone" onChange={handleInputChange} />
                </div>
                <div className={styles.inputContainer}>
                  <label>Dirección</label>
                  <input type="text" {...register('addres')}   class='addres' name="addres" onChange={handleInputChange} />
                </div>
                <div className={styles.inputContainer}>
                  <label>Email</label>
                  <input type="email" {...register('email',{required: true}) 
                  }  class='email' name="email" onChange={handleInputChange}/>
                </div>
               
                  <input type="submit" value='Finalizar Compra' className={styles.inputContainerBtn} />
               
               
                </div>
                
              
            </form>
          </div>
      
      
            
        </div>
      </div>
    </div>
    </>
  )

 

  
  
}

export default Cart