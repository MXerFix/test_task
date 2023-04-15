import React, { useState } from 'react'
import scroll_styles from './scrollpage.css'
import styles from '../page.css'
import ScrollBlock from './components/ScrollBlock/ScrollBlock'
import ScrollTitle from './components/ScrollTitle/ScrollTitle'
import sc_spemr_1 from '../img/scrollpg_sperm.png'
import sc_spemr_2 from '../img/scrolling_sperm_2.png'
import sc_spemr_3 from '../img/scrollpg_sperm_3.png'

export default function ScrollPage() {


  const [spermState, setSpermState] = useState(false);
  const sperm_anim_class = scroll_styles.sperm + ' ' + scroll_styles.sperm_anim_class

  window.addEventListener("touchstart", (e) => {
    e.stopImmediatePropagation()
    if (window.wrapper.scrollLeft != 1024) {
      setSpermState(true)
    }
    else {
      setSpermState(false)
    }
  })

  return (
    <div id="scrollPage" className={styles.page}>
      <img className={spermState ? sperm_anim_class : scroll_styles.sperm} src={sc_spemr_1} alt="" />
      <img className={spermState ? sperm_anim_class : scroll_styles.sperm} src={sc_spemr_2} alt="" />
      <img className={spermState ? sperm_anim_class : scroll_styles.sperm} src={sc_spemr_3} alt="" />
      <div id={scroll_styles.scroll_in_page} className={styles.in_page}>
        <ScrollTitle />
        <ScrollBlock />
      </div>
    </div>
  )
}
