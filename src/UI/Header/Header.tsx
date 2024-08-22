import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector'
import { CiLocationOn } from "react-icons/ci";
import axios from 'axios';
import useGeolocation from '../../utils/useGeolocation';


export const Header = () => {
  const [city, setCity] = useState('Loading...')
  const { coordinates } = useGeolocation()

  useEffect(() => {
    if (coordinates) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${process.env.REACT_APP_API_KEY}`).then(res => setCity(res.data.name))
    }
  }, [coordinates])

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
        <h3>{city}</h3>
      </div>
    </header>
  )
}
