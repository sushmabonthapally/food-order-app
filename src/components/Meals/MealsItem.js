import MealsForm from "./MealsForm";
import classes from './MealsItem.module.css'

const MealsItem = (props)=>{
    return(
        <div className={classes.mealsItem}>
            {props.items.map(val=>{
                return (
                <div key ={val.id} className={classes.items}>
                    <div>
                    <span style={{display:'flex'}}><b>{val.name}</b></span>
                    <span>{val.description}</span>
                    <span style={{display:'flex'}}>{val.price}</span>
                    </div>
                    <MealsForm onAddData={props.onAddItems} id={val.id} items={props.items} modalList={props.modalList}/>
                </div>
                )
            })}
        </div>
    )
}

export default MealsItem