import Game from '../../Components/Game';
import Winner from '../../Components/Winner'
import RenderState from '../../Components/RenderState';
import { Layout } from 'antd';
import styles from '../../styles/App.module.css'
const { Header, Footer, Content, Sider } = Layout;

import React from 'react'

function tictactoeindex() {
    return (
        <div className={styles.App}>
            <Layout>
              <Header className={styles.Header}>Enjoy The Game!</Header>
              <Layout className={styles.ContentSider}>
                <Content className={styles.Content}><Game /></Content>
                <Sider className={styles.SiderGame}><RenderState /></Sider>
              </Layout>
              <Footer className={styles.Footer}><Winner /></Footer>
            </Layout>
        </div>
    )
}

export default tictactoeindex

