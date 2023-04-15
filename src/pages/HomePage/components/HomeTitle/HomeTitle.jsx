import React from 'react'
import OtherBtn from '../../../../UI/OtherBtn/OtherBtn';
import styles from './hometitle.css';
import arrow_img from '../../../img/right-arrow.svg'

export default function HomeTitle() {


  function toScrollPage() {
    window.wrapper.scrollTo(1024, 0)
  }

  return (
    <div>
      <span className={styles.mini_title}>Привет,</span>
      <p className={styles.big_title}>это <strong>не</strong> <br /> коммерческое <br /> задание <OtherBtn id='homeBtn' text='Что дальше?' symbol={arrow_img} click_f={toScrollPage} /></p>
    </div>
  )
}
