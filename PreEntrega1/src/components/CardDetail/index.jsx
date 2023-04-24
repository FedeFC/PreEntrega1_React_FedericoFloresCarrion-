import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../ItemQuantitySelector";
import style from './cardDetail.module.scss'
import { userCartContext } from '../../Context'
import {getFirestore, doc ,getDoc} from 'firebase/firestore'


const CardDatail = () => {

    const [producto, setProducto] = useState({})
    const {id}= useParams ();
    
    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', id);
        getDoc(queryDoc)
        .then(res => setProducto({id: res.id, ...res.data()}))
    },[id])

    
    const [irAlCarrito, setirAlCarrito] = useState(false)
    const {addProduct} = userCartContext();

    const onAdd = (quantity) =>{
        setirAlCarrito(true);
        addProduct(producto, quantity);

    }

return (
    <div className={style.containerPadre}>
        <div className={style.containerImg}>
            <img src={producto.image} alt={producto.title} width="400" height='400'/>
        </div>
        <div className={style.containerDetail}>
            <h3>{producto.title}</h3>
            <p>{`<< ${producto.category} >>`}</p>
            <p>{producto.description}</p>
            <p className={style.priceDetail}>$ {producto.price}</p>
            <div>
                {
                    irAlCarrito ? 
                    <div className={style.rutas}>
                        <Link to='/products' className={style.enlaces}>Volver a productos</Link>
                        <Link to='/cart' className={style.enlaces}>Confirmar compra</Link> 
                    </div> : 
                        <ItemCount initial={1} stock={10} onAdd ={onAdd} />
                }
            </div>
        </div>
    </div>
  )
}

export default CardDatail