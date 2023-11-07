
    import React from 'react'
    import { useRecoilState, useRecoilValue} from 'recoil';
    import { History } from '../States/History';
    import { stepnumber } from '../States/stepnumber';
    import { isnextX } from '../States/isnextX';
    import { WinnerState } from '../States/WinnerState';
    import { Player1 } from '../States/Player1';
    import { Player2 } from '../States/Player2';
    import { Button} from 'antd';
    import styles from '../styles/App.module.css'

    
    function RenderState() {
        
    const History_game = useRecoilValue(History)
    const [, setStepnumber] = useRecoilState(stepnumber)
    const [nextTurnX, setnextTurnX] = useRecoilState(isnextX)
    const winner = useRecoilValue(WinnerState);
    const name1=useRecoilValue(Player1)
    const name2=useRecoilValue(Player2)

    function jumpTo(move_number:number) {
        // this.setState({
        //     stepnumber: move_number,
        //     nextTurnX: (move_number % 2) === 0
        // })
        setStepnumber(move_number)
        setnextTurnX((move_number % 2) === 0)
    
        
    }
    
    
    const moves = History_game.map((dummy_square, move) => {
        const listitem = move ? `Go to move ${move}` : 'Go to Start';
        return (
            <li key={move}>
                <Button onClick={() => jumpTo(move)}>{listitem}</Button>
            </li>
        )
    })
    let status;
        status = 'Next player: ' + (nextTurnX ? name1 : name2);
    console.log(name1,name2)
        if(!winner){
            return (
                <div className={styles.gameinfo}>
                      <h4>{status}</h4>  
                    <ol className={styles.ol}>{moves}</ol>
                </div>
        )
        }
        else{
            return(
                <div className={styles.gameinfo}>
                    <ol className={styles.ol}>{moves}</ol>
                </div>
            )
        }
        
    }
    
    export default RenderState
    