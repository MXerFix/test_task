import React, { useState } from 'react'
import styles from './brendmodal.css'
import cross from '../../../img/x.svg'
import BrendTitle from '../BrendTitle/BrendTitle'
import arrow from '../../../img/arrow.svg'

export default function BrendModal({ active, setActive }) {

  function onClickFunction() {
    setActive(false)
  }

  const modalClasses = styles.modal + ' ' + styles.modal_active
  const modal_contentClasses = styles.modal_content + ' ' + styles.modal_active

  const [firstList, setFirstList] = useState(true);
  const [secondList, setSecondList] = useState(false);

  const ul_classes = styles.ul_list + ' ' + styles.ul_list_active
  const pag_classes = styles.pag + ' ' + styles.pag_active

  return (
    <div className={active ? modalClasses : styles.modal} onClick={onClickFunction}>
      <div className={active ? modal_contentClasses : styles.modal_content} onClick={(e) => e.stopPropagation()} >
        <button onClick={onClickFunction} ><img className={styles.cross} src={cross} alt="" /></button>
        <div className={styles.advantages_title}>
          <BrendTitle> Преимущества </BrendTitle>
          <ul className={firstList ? ul_classes : styles.ul_list}>
            <li>
              <h4>01</h4>
              <p>Lorem ipsum dolor sit amet.
              </p>
            </li>
            <li>
              <h4>02</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <h4>03</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
          <ul className={secondList ? ul_classes : styles.ul_list}>
            <li>
              <h4>04</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <h4>05</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <h4>06</h4>
              <p>Lorem ipsum dolor sit.</p>
            </li>
          </ul>
          <div className={styles.pagination}>
            <button onClick={() => {setFirstList( firstList ? false : true); setSecondList( secondList ? false : true)}} className={styles.arrow}> <img src={arrow} className={styles.arrow_img} alt="" /> </button>
            <div className={styles.pagination_box}>
              <button className={firstList ? pag_classes : styles.pag}>  </button>
              <button className={secondList ? pag_classes : styles.pag}>  </button>
            </div>
            <button onClick={() => {setFirstList( firstList ? false : true); setSecondList( secondList ? false : true)}} className={styles.arrow}> <img src={arrow} className={styles.arrow_img} alt="" /> </button>
          </div>
        </div>
      </div>
    </div>
  )
}
