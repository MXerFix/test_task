import React from 'react'
import HomeTitle from './components/HomeTitle/HomeTitle'
import home_styles from './homepage.css'
import styles from '../page.css'
import bakti_1 from '../img/bakti_1.png'
import bakti_2 from '../img/bakti_2.png'
import bakti_3 from '../img/bakti_3.png'
import sperm_1 from '../img/pink_sperm.png'
import sperm_2 from '../img/pink_sperm_1.png'
import a_bakti_1 from '../img/a_bakti_1.png'
import a_bakti_2 from '../img/a_bakti_2.png'
import a_bakti_3 from '../img/a_bakti_3.png'
import a_bakti_4 from '../img/a_bakti_4.png'

export default function HomePage() {
  return (
    <div className={styles.page}>
      <img className={home_styles.sperm} src={sperm_2} alt="" />
      <img className={home_styles.bakti} src={bakti_1} alt="" />
      <img className={home_styles.bakti} src={bakti_2} alt="" />
      <img className={home_styles.bakti} src={bakti_3} alt="" />
      <img className={home_styles.sperm} src={sperm_1} alt="" />
      <img className={home_styles.a_bakti} src={a_bakti_1} alt="" />
      <img className={home_styles.a_bakti} src={a_bakti_3} alt="" />
      <img className={home_styles.a_bakti} src={a_bakti_2} alt="" />
      <img className={home_styles.a_bakti} src={a_bakti_4} alt="" />
      <div className={styles.in_page}>
        <HomeTitle />
      </div>
    </div>
  )
}
