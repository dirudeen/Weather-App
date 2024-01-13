import axios from "axios"

const apikey: string = import.meta.env.VITE_ACC_WEATHER_API_KEY

if(!apikey) throw Error("api key is missing")

export async function fetchCurrrentWeatherCondition(locationCode = 318251) {
  const response = await axios.get(
    `http://dataservice.accuweather.com/currentconditions/v1/${locationCode}?apikey=${apikey}`
  );
  return response;
}