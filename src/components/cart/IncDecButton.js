import { useState } from 'react'
import classes from './IncDecButton.module.css'

const IncDecButton =(props)=>{
    const [newCount,setNewCount] = useState(props.count)
    const countChangeHandler = ()=>{
        setNewCount(preState=>preState-1)
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        props.onCount(newCount);
    }
    
    return(
        <form className={classes.IncDecBtn} onSubmit={submitHandler}>
            <button className={classes.Btn} onClick={countChangeHandler}>-</button>
            <button className={classes.Btn}>+</button>
        </form>
    )
}

export default IncDecButton