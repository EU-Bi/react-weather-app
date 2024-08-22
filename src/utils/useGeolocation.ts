import { useState, useEffect } from "react";

interface Coordinates {
	latitude: number;
	longitude: number;
}

interface GeolocationState {
	coordinates: Coordinates | null;
	error: string | null;
}

const useGeolocation = (): GeolocationState => {
	const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setCoordinates({ latitude, longitude });
					setError(null);
				},
				(err) => {
					setError(err.message);
				},
			);
		} else {
			setError("Geolocation is not supported by this browser.");
		}
	}, []);

	return { coordinates, error };
};

export default useGeolocation;
