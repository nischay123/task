import axios from 'axios';
import React,{useState, useEffect} from 'react';
import Card from '../../components/card/Card';
import style from './Shop.module.css'

export default function Shop(props) {

    const [products, setProducts] = useState([]);

    const addToCart = (id)=>{
          const x =   products.filter(ele =>{ 
             return  ele.id === id; 
        });
        
        let newArr = [...products];


        const added = {
            ...x[0],
              
        }
        added.count=1;
        console.log("added" ,added )
        newArr.forEach((ele,index )=> {
            if(ele.id === id ){
                  ele.cart = true
            }
        });
        props.setCatalog([...props.catalog ,added]);
        setProducts(newArr);
    }

    useEffect(() => {
        if(products.length === 0){
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                const arr = res.data.map((ele)=>{
                    return {
                        ...ele,
                        cart: false
                    }
                })
                setProducts(arr)
            })
            .catch((err) => console.log(err))
        }
    }, [])
      

    console.log("line 34",products)
    let cards=null;
    if(products.length >= 0){
        cards = products.map((product)=>{
           
           return <Card 
           id={product.id}
           title={product.title}
           description ={product.description}
           category = {product.category}
           image={product.image}
           price={product.price}
           addToCart={addToCart}
           InCart = {product.cart}
           />
        })
    }
    if(products.length == 0){
        cards = <h1>Loading ....</h1>
    }
    return (
        <div >
            <h1>SHOP HERE</h1>
            <div className={style.card_container}>
                {cards}
            </div>
        </div>
    )
}
