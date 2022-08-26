import shopping from '../../shopping-cart-image.webp';
import classes from '../Header/Header.module.css';
import React, {useState} from 'react';
import Modal from './Modal.js'

const Cart = (props)=>{
    const [show, setShow] =  useState(false)
    const openModalHandler = ()=>{
        setShow(true)
    }
     const closeModalHandler = ()=>{
        setShow(false)
    }
    return(
        <div>
        <button className={classes.HeaderButton} onClick={openModalHandler}>
                <img src={shopping} alt="shopping" className={classes.image}/>
                <span>Your Cart</span>
                <span className={classes.cartData}>{props.list}</span>
        </button>
        <Modal show={show} onClose={closeModalHandler} users={props.users} onData={props.onBtnData}/>
        </div>
    )
}

export default Cart