import axios from "axios";

 const forecastApi= axios.create({
  baseURL: "https://api.open-meteo.com/v1/",
  timeout: 1000,
});

const goeLocationApi = axios.create({
  baseURL: "https://geocoding-api.open-meteo.com/v1/",
  timeout: 1000,
});



export async function fetchCurrrentWeatherCondition({lat, long}: {lat: string, long: string}) {
  const response = await forecastApi.get(
    `forecast?latitude=${lat}.73&longitude=${long}&current=temperature_2m,apparent_temperature,precipitation,wind_speed_10m,wind_direction_10m&timezone=auto`
  );
  return response.data;
}