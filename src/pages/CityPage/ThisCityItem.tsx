import { IndicatorSvgSelector } from "../../assets/icons/IndicatorSvgSelector";
import type { Item } from "./ThisCityInfo";
import s from "./ThisCityInfo.module.scss";

interface Props {
  item: Item;
}

export const ThisCityItem = ({ item }: Props) => {
  const { icon_id, name, value } = item;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className={s.indicator__name}>{name}</div>
      <div className={s.indicator__value}>{value}</div>
    </div>
  );
};