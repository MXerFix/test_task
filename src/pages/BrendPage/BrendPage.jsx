import React, { useState } from 'react'
import styles from '../page.css'
import brend_styles from './brendpage.css'
import BrendGrid from './components/BrendGrid/BrendGrid'
import BrendTitle from './components/BrendTitle/BrendTitle'
import bottle from '../img/bottle.png'
import bubble_1 from '../img/1.png'
import bubble_2 from '../img/2.png'
import bubble_3 from '../img/3.png'
import bubble_4 from '../img/4.png'
import bubble_5 from '../img/5.png'
import bubble_6 from '../img/6.png'
import bubble_7 from '../img/7.png'
import bubble_8 from '../img/8.png'
import BrendModal from './components/BrendModal/BrendModal'


export default function BrendPage() {

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={styles.page}>
        <img className={brend_styles.bubble} src={bubble_1} alt="" />
        <img className={brend_styles.bubble} src={bubble_2} alt="" />
        <img className={brend_styles.bubble} src={bubble_3} alt="" />
        <img className={brend_styles.bubble} src={bubble_4} alt="" />
        <img className={brend_styles.bottle} src={bottle} alt="" />
        <img className={brend_styles.bubble} src={bubble_5} alt="" />
        <img className={brend_styles.bubble} src={bubble_6} alt="" />
        <img className={brend_styles.bubble} src={bubble_7} alt="" />
        <img className={brend_styles.bubble} src={bubble_8} alt="" />
      <div id={styles.brendPage} className={styles.in_page}>
        <BrendTitle> Ключевое сообщение </BrendTitle>
        <BrendGrid setActive={setModalActive} />
      </div>
      <BrendModal active={modalActive} setActive={setModalActive} />
    </div>
  )
}
