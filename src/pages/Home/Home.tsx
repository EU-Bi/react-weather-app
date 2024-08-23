import { useEffect, useState } from "react";
import { Card } from "./Card";
import styles from "./Home.module.scss";
import citiesData from "../../assets/city.list.min.json";
import type { City } from "../../utils/types/interfaces";
import { useAppDispatch, useAppSelector } from "../../utils/hooksRedux";
import { addCity } from "../../redux/citiesSlice";

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

export const Home = () => {
	const cities = useAppSelector((state) => state.cities.cities);
	const dispatch = useAppDispatch();
	const [searchValue, setSearchValue] = useState("");
	const [filteredCities, setFilteredCities] = useState<City[]>(citiesData);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
		if (searchValue) {
			const filteredData = citiesData.filter((city) => {
				return Object.values(city)
					.join("")
					.toLowerCase()
					.includes(searchValue.toLowerCase());
			});
			setFilteredCities(filteredData.slice(0, 10));
		} else {
			setFilteredCities(citiesData.slice(0, 10));
		}
	};

	const handleClick = (city: string) => {
		if (cities.includes(city)) {
			alert(`${city} is already in your list`);
		} else {
			dispatch(addCity(city));
			setSearchValue("");
		}
	};

	return (
		<div className={styles.container}>
			<h1>Your cities</h1>
			<div className={styles.search_wrapper}>
				<input
					type="text"
					className={styles.search}
					onChange={(e) => handleSearch(e)}
					value={searchValue}
				/>
				<ul
					className={searchValue.length > 0 ? styles.cities : styles.disabled}
				>
					{filteredCities.length === 0 && searchValue && (
						<li className={styles.city}>Nothing found</li>
					)}
					{filteredCities.map((city) => (
						<li
							className={styles.city}
							key={city.id}
							onClick={() => handleClick(city.name)}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									handleClick(city.name);
								}
							}}
						>
							{city.name}
						</li>
					))}
				</ul>
			</div>
			<div className={styles.wrapper}>
				{cities.map((city) => (
					<Card key={city} city={city} />
				))}
			</div>
		</div>
	);
};
