import classes from './Header.module.css'
import Cart from '../cart/Cart.js'
// import shopping from '../../shopping-cart-image.webp'

const Header = (props)=>{
    return(
        <div className={classes.header}>
            <h2>ReactMeals</h2>
             <Cart list={props.list} users={props.users} onBtnData={props.onModalData}/>
        </div>
    )
}

export default Header