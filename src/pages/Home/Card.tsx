import React, { memo, useEffect, useState } from "react";
import { GlobalSvgSelector } from "../../assets/icons/GlobalSvgSelector";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";
import { LuRefreshCcw } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";
import type { Weather } from "../../utils/types/interfaces";

type Props = {
	city: string;
};

export const Card = memo(function Card({ city }: Props) {
	const [weather, setWeather] = useState<Weather>({} as Weather);
	useEffect(() => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`,
			)
			.then((res) => setWeather(res.data));
	}, [city]);
	const day = {
		city: "Киев",

		day: "Сегодня",
		day_info: "28 авг",
		time: "18:00",
		icon_id: "sun",
		temp_day: "+18",
		temp_night: "+15",
		info: "Облачно",
	};
	return (
		<div className={styles.card}>
			<Link to={"/city"} className={styles.city_wrapper}>
				<div className={styles.city}>
					<CiLocationOn size={30} color="white" />
					{city}
				</div>
				{/* <div className={styles.img}>
					<GlobalSvgSelector id={weather.weather[0].icon} />
				</div> */}
				{/* <div className={styles.day__info}>{weather.main.}</div> */}
				<div className={styles.temp__day}>
					{Math.round(weather.main.temp_max - 273)}
				</div>
				<div className={styles.temp__night}>
					{Math.round(weather.main.temp_min - 273)}
				</div>
				<div className={styles.info}>{weather.weather[0].description}</div>
			</Link>
			<div className={styles.refresh}>
				<LuRefreshCcw size={30} color="white" />
			</div>
		</div>
	);
});
