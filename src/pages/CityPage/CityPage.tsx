import React from "react";
import { ThisCity } from "./ThisCity";
import { ThisCityInfo } from "./ThisCityInfo";
import styles from "./CityPage.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../utils/hooksRedux";
import { deleteCity } from "../../redux/citiesSlice";

export const CityPage = () => {
	const location = useLocation();
	const { weather } = location.state;

	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(deleteCity(weather.name));
	};

	return (
		<div className={styles.container}>
			<div className={styles.this__city}>
				<Link to="/" onClick={handleClick} className={styles.delete}>
					Delete City
				</Link>
				<div className={styles.wrapper}>
					<ThisCity weather={weather} />
					<ThisCityInfo weather={weather} />
				</div>
			</div>
			<Link to="/" className={styles.button}>
				Go Home Page
			</Link>
		</div>
	);
};
