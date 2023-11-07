import '../styles/globals.css'
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import tictactoeindex from './Tic-Tac-Toe/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
  <Component {...pageProps} />
  </RecoilRoot>
  )
}
export default MyApp
