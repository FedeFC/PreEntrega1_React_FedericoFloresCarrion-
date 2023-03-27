import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

            <button>
            <box-icon name='cart'color='rgb(0,0,0)' ></box-icon>
                 Add to cart
            </button>
        </div>
    </div>
  )
}

export default CardDatail