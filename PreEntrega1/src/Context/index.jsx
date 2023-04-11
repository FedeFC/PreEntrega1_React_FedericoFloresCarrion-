import React, { createContext, useContext, useState } from 'react'


const CarritoContex = createContext([]);

export const userCartContext = () => useContext(CarritoContex);

export const CarritoProvider = ({children}) => {


    const [cart, setcart] = useState([]);

    // const addProduct = (item, newQuantity) =>{
    //     const newCart = cart.filter(prod => prod.id !== item.id);
    //     newCart.push({...item, quantity : newQuantity});
    //     setcart(newCart);
    // }
    console.log('carrito : ', cart );


    const addProduct = (item,quantity) => {
     if(isInCart(item.id)){
        setcart(cart.map(product =>{
            return product.id === item.id ? { ...product, quantity : product.quantity + quantity} : product
        }));
     }else{
        setcart([...cart, {...item, quantity}])
     }
    }

    const clearCart = () => setcart([])

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setcart(cart.filter(product => product.id !== id));

    const totalPrice = () =>{
        return cart.reduce((prev,act) => prev + act.quantity * act.price,0);
    }

    
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)


  return (
    <div>
        <CarritoContex.Provider value={{
            clearCart, 
            isInCart, 
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
        }}>
            {children}
        </CarritoContex.Provider>
        

        
    </div>
  )
}

export default CarritoProvider