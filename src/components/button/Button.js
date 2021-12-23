import React from 'react'
import style from './Button.module.css'

const  Button = ({content}) =>{
    return (
            <button class={[style.button1 , style.button].join(" ")}>{content}</button>            
    )
}


export default Button;