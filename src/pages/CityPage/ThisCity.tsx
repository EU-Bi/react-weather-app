import s from "./ThisCity.module.scss";
import type { Weather } from "../../utils/types/interfaces";

type Props = {
	weather: Weather;
};

export const ThisCity = ({ weather }: Props) => {
	return (
		<div className={s.this__day}>
			<div className={s.top__block}>
				<div className={s.top__block_wrapper}>
					<div className={s.this__temp}>
						{Math.round(weather.main.temp - 273)}°
					</div>
					<div className={s.this__day_name}>Today</div>
				</div>
				<div className={s.this__day_name}>{weather.weather[0].description}</div>
			</div>
			<div className={s.bottom__block}>
				<div className={s.this__time}>
					Time: <span>{new Date(weather.dt * 1000).toLocaleTimeString()}</span>
				</div>
				<div className={s.this__city}>
					City:{" "}
					<span>
						{weather.name}, {weather.sys.country}
					</span>
				</div>
			</div>
		</div>
	);
};
