import classes from './Modal.module.css'
import React from 'react'
import IncDecButton from './IncDecButton'

const Modal = (props)=>{
    return (
        <div>
        {props.show === true?
        <div className={classes.modal}>
            <div className={`${classes['modal-content']}`}>
                <div className={`${classes['modal-body']}`}>
                    {props.users.map(val=>{
                        return (
                        <div key={Math.random()} className={`${classes['modal-data']}`}>
                        <div>
                            <p>{val.name}</p>
                            <p>{val.price}</p>
                            <p>{val.count}</p>
                        </div>
                        <IncDecButton count={val.count} onCount={props.onData}/>
                        </div>
                        )
                    })}
                </div>
                <div className={`${classes['modal-footer']}`}>
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>:''}
        </div>
    )
}
export default Modal