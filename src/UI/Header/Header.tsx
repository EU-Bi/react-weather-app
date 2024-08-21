import React from 'react'
import styles from './Header.module.scss'
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector'
import { CiLocationOn } from "react-icons/ci";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={styles.title}>React Weather App</div>
      </div>
      <div className={styles.wrapper}>
        <CiLocationOn size={30} />
        <h3>Kyiv</h3>
      </div>
    </header>
  )
}
