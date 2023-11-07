import React from 'react'
import {Form, Input , Button} from 'antd';
import { Player1 } from '../../States/Player1';
import { Player2 } from '../../States/Player2';
import { useRecoilState} from 'recoil';
import {useRouter} from 'next/router'



function Landing() {

    const [name1,setName1]=useRecoilState(Player1)
    const [name2,setName2]=useRecoilState(Player2)
    const router = useRouter()
    
        return (
            <div>
                <Form>
                    <Form.Item label='Player 1'>
                        <Input type='text' value={name1}
              onChange={e => setName1(e.target.value)}></Input>
                    </Form.Item>
                    
                    <Form.Item label='Player 2'>
                        <Input type='text' value={name2}
              onChange={e => setName2(e.target.value)}></Input>
                    </Form.Item>

                    <Form.Item>
                        <Button type='default' onClick={()=> router.push('./Tic-Tac-Toe/Landing')}>
                            Start Playing!
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
    
    export default Landing
