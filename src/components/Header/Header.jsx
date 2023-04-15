import React from 'react'
import NavItem from '../../UI/NavItem/NavItem'
import styles from './header.css';
import home_img from '../../pages/img/home.svg'

export default function Header() {

  function toHomePage() {
    window.wrapper.scrollTo(0, 0)
  }

  return (
    <ul className={styles.header}>
      <NavItem>
        <button onClick={toHomePage}><img className={styles.home_ic} src={home_img} alt="" /></button>
      </NavItem>
      <NavItem>
        Project
      </NavItem>
    </ul>
  )
}
