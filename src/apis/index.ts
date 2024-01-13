import axios from "axios"

const apikey: string = import.meta.env.VITE_ACC_WEATHER_API_KEY

if(!apikey) throw Error("api key is missing")

