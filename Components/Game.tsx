import React from 'react'
import Board from './Board';
import { useRecoilState } from 'recoil';
import { History } from '../States/History';
import { stepnumber } from '../States/stepnumber';
import { isnextX } from '../States/isnextX';
import { WinnerState } from '../States/WinnerState';
import styles from '../styles/App.module.css'

const Game = () => {
    const [History_game, setHistory] = useRecoilState(History)
    const [stepnumber_game, setStepnumber] = useRecoilState(stepnumber)
    const [nextTurnX, setnextTurnX] = useRecoilState(isnextX)
    const [, setwinner] = useRecoilState(WinnerState);

    
    setwinner(calWinner(History_game[stepnumber_game]))


    function handleClick(i:number) {
        const history = History_game.slice(0, stepnumber_game + 1)
        const current = history[stepnumber_game];
        const square = current.slice();
        if (calWinner(square) || square[i]) {
            return;
        }
        square[i] = nextTurnX ? "X" : "O";
        setHistory(history.concat([square]))
        setStepnumber(history.length)
        setnextTurnX(!nextTurnX)
    }

    return (

        <div className={styles.wrapper}>
            < div className={styles.container}>
                <div className={styles.board}>
                    <Board onClickgame={(i:any) => handleClick(i)} squares={History_game[stepnumber_game]} ></Board>
                </div>
                

            </div>
        </div>

    )

    function calWinner(square:any) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (square[a] && square[a] === square[b] && square[a] === square[c]) {
                return square[a];
            }
        }
        return null;
    }
}

export default Game
