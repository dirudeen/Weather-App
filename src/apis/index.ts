import axios from "axios";

 const axiosIstance = axios.create({
  baseURL: "http://dataservice.accuweather.com/",
  timeout: 1000,
});

const apikey: string = import.meta.env.VITE_ACC_WEATHER_API_KEY

if(!apikey) throw Error("api key is missing")

export async function fetchCurrrentWeatherCondition(locationCode = 318251) {
  const response = await axiosIstance.get(
    `currentconditions/v1/${locationCode}?apikey=${apikey}`
  );
  return response;
}