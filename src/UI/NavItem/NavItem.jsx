import React from 'react'
import styles from './navitem.css'

export default function NavItem({children}) {
  return (
    <li className={styles.item}>
      {children}
    </li>
  )
}
