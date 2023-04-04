import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../ItemQuantitySelector";
import style from './cardDetail.module.scss'


const CardDatail = () => {

    const [producto, setProducto] = useState({})
    const {id}= useParams ();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) =>{
            setProducto(data);
        });
    }, [id])
    
    const [irAlCarrito, setirAlCarrito] = useState(false)

    const onAdd = (cantidad) =>{
        setirAlCarrito(true)

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
                    irAlCarrito ? <Link to='/cart'>Confirmar compra</Link> : <ItemCount initial={1} stock={10} onAdd ={onAdd} />
                }
            </div>
        </div>
    </div>
  )
}

export default CardDatail