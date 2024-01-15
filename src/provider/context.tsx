import { ReactNode, createContext, useEffect, useState } from "react";
import { fetchCityInfo } from "../apis";
import { CityInfoProps } from "../types/cityTypes";

interface City {
  city: CityInfoProps | null;
  onSetCity: (city: CityInfoProps) => void;
}

type ContextProps = City | null;

export const CityContext = createContext<ContextProps>(null);

export function CityContextProvider({ children }: { children: ReactNode }) {
  //   const { data } = useFetchCityQuery("istanbul");
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
