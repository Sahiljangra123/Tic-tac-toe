import React from 'react'
import styles from '../styles/App.module.css'

const Square = (props:any) => {
    
    return (
        <div>
            <button className={styles.block} onClick={() => { props.onClickboard() }}>{props.value}</button>
        </div>
    )
}

export default Square

