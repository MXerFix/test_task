import React from 'react'
import styles from './otherbtn.css'

export default function OtherBtn(props) {

  return (
    <button onClick={props.click_f} id={props.id} className={styles.button}>
      <span className={styles.span}>
        <img className={styles.btn_img} src={props.symbol} alt="" />
      </span>
      {props.text}
    </button>
  )
}
