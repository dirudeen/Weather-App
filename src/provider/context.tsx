import { ReactNode, createContext, useEffect, useState } from "react";
import { fetchCityInfo } from "../apis";
import { CityInfoProps } from "../types/cityTypes";

interface City {
  city: CityInfoProps | null;
  onSetCity: (city: CityInfoProps) => void;
}
const initialState = {
  city: {
    id: 0,
    name: "",
    latitude: 0,
    longitude: 0,
    country_code: "",
    timezone: "",
    country: "",
    admin1: "",
  },
  onSetCity: () => {},
};

export const CityContext = createContext<City>(initialState);

export function CityContextProvider({ children }: { children: ReactNode }) {
  const [city, setCity] = useState<City["city"]>(null);
  useEffect(() => {
    const fetchCity = async () => {
      const data = await fetchCityInfo();
      return setCity(data[0]);
    };
    fetchCity();
  }, []);

  const value = {
    city,
    onSetCity: (cityData: CityInfoProps) => setCity(cityData),
  };
  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
}
