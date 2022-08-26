import { useState } from "react";
import classes from './MealsForm.module.css'


const MealsForm = (props)=>{
    const [count, setCount] = useState(1)
    const numberChangeHandler = (event)=>{
        setCount(event.target.value)
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        let itemList = props.items.find(item =>
            item.id === props.id)
        let final = {'name':itemList.name, 'price':itemList.price, 'count':+count}
        props.onAddData(count,final)
    }
    return(
        <form onSubmit={submitHandler}>
            <label>Amount</label>
            <input type="number" onChange={numberChangeHandler} value={count || ''}/>
            <button type="submit" className={classes.addButton}>+ Add</button>
        </form>
    )
}

export default MealsForm