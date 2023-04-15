import React from 'react'
import OtherBtn from '../../../../UI/OtherBtn/OtherBtn'
import styles from './brendgrid.css'
import icon_1 from '../../../img/icon1.png'
import icon_2 from '../../../img/icon2.png'
import plus_img from '../../../img/plus.svg'

export default function BrendGrid({setActive}) {

  function setActiveTrue() {
    setActive(true)
  }

  return (
    <div className={styles.brend_grid}>
      <div className={styles.brend_big}>
        <img className={styles.icon} src={icon_2} alt="" />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum quaerat soluta tenetur. Impedit animi quasi sunt!
      </div>
      <div className={styles.brend_small}>
        <img id={styles.snd_icon} className={styles.icon} src={icon_1} alt="" />
        Lorem ipsum dolor sit amet
      </div>
      <div className={styles.brend_btn}>
        <OtherBtn id='brendBtn' text='Подробнее' symbol={plus_img} click_f={setActiveTrue} />
      </div>
    </div>
  )
}
