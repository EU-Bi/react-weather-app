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
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!loading) {
			axios
				.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`,
				)
				.then((res) => {
					setWeather(res.data);
					setLoading(true);
				});
		}
	}, [city, loading]);

	return !loading && weather ? (
		<div className={styles.card}>
			<div className={styles.temp__day}>Loading ...</div>
		</div>
	) : (
		<div className={styles.card}>
			<Link to={"/city"} state={{ weather }} className={styles.city_wrapper}>
				<div className={styles.city}>
					<CiLocationOn size={30} color="white" />
					{city}
				</div>
				<div className={styles.city__info}>{weather.sys.country}</div>
				<div className={styles.temp__day}>
					{Math.round(weather.main.temp_max - 273)}°C
				</div>
				<div className={styles.temp__night}>
					{Math.round(weather.main.temp_min - 273)}°C
				</div>
				<div className={styles.info}>{weather.weather[0].description}</div>
			</Link>
			<div className={styles.refresh} onClick={() => setLoading(false)}>
				<LuRefreshCcw size={30} color="white" />
			</div>
		</div>
	);
});
