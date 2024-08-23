import React from "react";
import s from "./ThisCityInfo.module.scss";
import { ThisCityItem } from "./ThisCityItem";
import type { Weather } from "../../utils/types/interfaces";

export interface Item {
	icon_id: string;
	name: string;
	value: string;
}
type Props = {
	weather: Weather;
};
export const ThisCityInfo = ({ weather }: Props) => {
	const items = [
		{
			icon_id: "temp",
			name: "Temperature",
			value: `${Math.round(weather.main.temp - 273)}°C - feels like ${Math.round(weather.main.feels_like - 273)}°C`,
		},
		{
			icon_id: "pressure",
			name: "Pressure",
			value: `${Math.round(weather.main.pressure / 1.333)} mm Hg`,
		},
		{
			icon_id: "precipitation",
			name: "Precipitation",
			value: weather.weather[0].main,
		},
		{
			icon_id: "wind",
			name: "Wind",
			value: `${weather.wind.speed} m/s`,
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
	);
};
