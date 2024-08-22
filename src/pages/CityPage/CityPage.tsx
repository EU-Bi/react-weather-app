import React from 'react'
import { ThisCity } from './ThisCity'
import { ThisCityInfo } from './ThisCityInfo'
import styles from './CityPage.module.scss'
import { Link } from 'react-router-dom'

export const CityPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.this__city}>
        <div className={styles.delete}>Delete City</div>
        <div className={styles.wrapper}>
          <ThisCity />
          <ThisCityInfo />
        </div>

      </div>
      <Link to='/' className={styles.button}>Go Home Page</Link>
    </div>
  )
}
