import React from 'react'
import { Row, Col, Button } from 'antd';
import { useRecoilState,useRecoilValue } from 'recoil';
import { History } from '../States/History';
import { stepnumber } from '../States/stepnumber';
import { isnextX } from '../States/isnextX';
import { WinnerState } from '../States/WinnerState';
import { Player1 } from '../States/Player1';
import { Player2 } from '../States/Player2';
import {useRouter} from 'next/router'



function Winner() {
    const [, setHistory] = useRecoilState(History)
    const [, setStepnumber] = useRecoilState(stepnumber)
    const [, setnextTurnX] = useRecoilState(isnextX)
    const [winner, setwinner] = useRecoilState(WinnerState);
    const name1=useRecoilValue(Player1)
    const name2=useRecoilValue(Player2)
const router=useRouter()

    const ResetStates = () => {
        setHistory([Array(9).fill(null)]);
        setStepnumber(0);
        setnextTurnX(true);
        setwinner(null);
    }
    if (winner) {
        return (
            <div>
                Winner is {(winner==='X')? name1 :name2}
                <Row gutter={[24, 24]}>
                    <Col span={7} ></Col>
                    <Col span={5} >
                        <Button type='dashed' onClick={ResetStates}>Play Again!</Button>
                    </Col>
                    <Col span={5} >
                        <Button type='dashed' onClick={()=>{
                            {ResetStates}
                            router.push('../')
                        }}>Back to Home Page</Button>
                    </Col>
                    <Col span={7} ></Col>
                </Row>

            </div>
        )
    }
    return (
        <div>

        </div>
    )
}

export default Winner
