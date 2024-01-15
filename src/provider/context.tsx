import { ReactNode, createContext, useEffect, useState } from "react";
import { CityInfoProps } from "../types/cityTypes";
import useFetchCityQuery from "../hooks/useFetchCityQuery";

interface City {
    city: CityInfoProps | null
    onSetCity: (city: CityInfoProps) => void
}

type ContextProps = City | null

const CityContext= createContext<ContextProps>(null)


export function ContextProvider ({children}: {children: ReactNode}) {
    const [city, setCity] = useState<CityInfoProps | null>(null)
    const {data} = useFetchCityQuery("istanbul")


    useEffect(() => {
      if(data){
        setCity(data[0])
      }
    }, [])
    



    const value = {
        city,
        onSetCity: (city: CityInfoProps) => setCity(city)
    }
    return (
        <CityContext.Provider value={value}>
            {children}
        </CityContext.Provider>
    )
}