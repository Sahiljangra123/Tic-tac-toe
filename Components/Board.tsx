
import styles from '../styles/App.module.css'
import React from 'react'
import Square from './Square'

const Board = (props:any) => {

    function renderSquare(i:number) {
        return <Square value={props.squares[i]} onClickboard={() => props.onClickgame(i)}></Square>
    }

    return (
        <div>
            <div className={styles.row}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className={styles.row }>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className={styles.row }>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board

