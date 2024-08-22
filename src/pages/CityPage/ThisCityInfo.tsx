import React from 'react'
import s from './ThisCityInfo.module.scss'
import { ThisCityItem } from './ThisCityItem'

export interface Item {
  icon_id: string
  name: string
  value: string
}
export const ThisCityInfo = () => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ];
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisCityItem key={item.icon_id} item={item} />
        ))}
      </div>
      {/* <img className={s.cloud__img} src={cloud} alt="облако" /> */}
    </div>
  )
}
