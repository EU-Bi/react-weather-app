import React from 'react'
import { Card } from './Card'
import styles from './Home.module.scss'

const day = {
  city: 'Киев',

  day: 'Сегодня',
  day_info: '28 авг',
  time: '18:00',
  icon_id: 'sun',
  temp_day: '+18',
  temp_night: '+15',
  info: 'Облачно',
}

export const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Your cities</h1>
      <div className={styles.wrapper}>
        <Card day={day} />
        <Card day={day} />
        <Card day={day} />
        <Card day={day} />
        <Card day={day} />
        <Card day={day} />
        <Card day={day} />
        <Card day={day} />
        <Card day={day} />
        <Card day={day} />
      </div>
    </div>
  )
}
