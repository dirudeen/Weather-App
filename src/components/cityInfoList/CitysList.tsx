import { useEffect, useState } from "react";
import { CityInfoProps } from "../../types/cityTypes";
import useCityContext from "../../hooks/useCityContext";

export default function CitysList({
  searchResults,
  showList,
  onHideList
}: {
  onHideList: () => void
  showList: string
  searchResults: CityInfoProps[]
}) {
  const [showResultList, setShowResultList] = useState(false);
  const context = useCityContext()

  useEffect(() => {
      if(showList.length > 1){
          setShowResultList(true)
      } else {
        setShowResultList(false)
      }
  }, [showList])
      
  return (
    <ul className="absolute inset-0 z-10 bg-slate-600 w-100 h-fit translate-y-9 space-y-4">
      {showResultList &&
        searchResults.map((city) => {
          return (
            <li
              key={city.id}
              onClick={() => {
                onHideList()
                context?.onSetCity(city)
              }}
            >
              <h3>{city.admin1}</h3>
            </li>
          );
        })}
    </ul>
  );
}
