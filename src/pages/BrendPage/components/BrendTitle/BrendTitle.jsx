import React from 'react'
import styles from './brendtitle.css';

export default function BrendTitle({children}) {
  return (
    <div className={styles.brend_title}>
      <span className={styles.mini_title}> {children} </span>
      <p className={styles.big_title}> brend<strong>xy</strong></p>
    </div>
  )
}
