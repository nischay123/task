import React from 'react'
import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({id,InCart, title, price, description, category, image, addToCart }) => {
    return (
        <div class={style.card}>
            <img
                src={image}
            />
            <h2>{category}</h2>
            <h3> {title}</h3>
            <p class={style.price}>${price}</p>
            <p className={style.desc}>{description}</p>
            {InCart == false ?
             <button 
             onClick={()=>addToCart(id)} >{InCart==false ? "Add to Cart": "added in cart"}
             </button>
             : 
               null
             }
            <Link to="/catalog">
            <button className={style.green_btn}>
               Go to Cart
             </button>
             </Link>
        </div>
    )
}


export default Card;