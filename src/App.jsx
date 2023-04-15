import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import './main.global.css'
import styles from './app.css'
import ScrollPage from './pages/ScrollPage/ScrollPage'
import BrendPage from './pages/BrendPage/BrendPage'
import Header from './components/Header/Header'
import onPoint_watermark from './pages/img/onpoint_watermark.svg'

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div id="wrapper" className={styles.wrapper}>
        <HomePage />
        <ScrollPage />
        <BrendPage />
      </div>
      <img className={styles.watermark} src={onPoint_watermark} alt="" />
    </div>

  )
}
