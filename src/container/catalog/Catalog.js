import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

import style from './Catalog.module.css'


const Catalog = ({ catalog, increaseCount, decreaseCount, removeItem }) => {
    console.log("catalog", catalog)
    let totalprice = 0, priceitems = null;;
    let catalogitems = catalog.map(ele => {
        totalprice += (ele.price * ele.count) + totalprice;
        return <div className={style.catalog} key={ele.id}>

            <div className='inagecontainer' >
                <img src={ele.image} />
            </div>
            <div className={style.name}>
                {ele.title}
            </div>
            <div className={style.price}>
                ${ele.price}
            </div>
            <div>
                <i onClick={() => removeItem(ele.id)} class="fa fa-trash-o"></i>
            </div>

            <div>
                <div class="btn-group" >
                    <button onClick={() => increaseCount(ele.id)} >+</button>
                    <button >{ele.count}</button>
                    <button onClick={() => decreaseCount(ele.id)} >{"-"}</button>
                </div>
            </div>

        </div>
    })
    if (catalog.length == 0) {
        catalogitems = <h1>Please Add Items</h1>
    }





    return (
        <>
            <h2>CATALOG</h2>
            <div className={style.price_container}>
                <div className={style.t_price}>
                    Total Price {totalprice.toFixed(2)}
                </div>
                <Link to="/shop">
                    <Button content={"go back to products"} />
                </Link>
            </div>
            <div className={style.catalog_container}>
                {catalogitems}
            </div>

            
        </>

    )
}


export default Catalog;