import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector'
import s from './Card.module.scss'

type Props = {
  day: {
    day: string,
    day_info: string,
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string
  }

}

export const Card = ({ day }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.day}>{day.day}</div>
      <div className={s.day}>{day.day}</div>
      <div className={s.day__info}>{day.day_info}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={day.icon_id} />
      </div>
      <div className={s.temp__day}>{day.temp_day}</div>
      <div className={s.temp__night}>{day.temp_day}</div>
      <div className={s.info}>{day.info}</div>
      <div>Refresh</div>
    </div>
  )
}
