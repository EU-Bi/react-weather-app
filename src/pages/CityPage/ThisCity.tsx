import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector'
import s from './ThisCity.module.scss'


export const ThisCity = () => {
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>12°</div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>21:54</span>
        </div>
        <div className={s.this__city}>
          Время: <span>Санкт-Петербург</span>
        </div>
      </div>
    </div>
  )
}
