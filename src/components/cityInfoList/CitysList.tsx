import { useEffect, useState } from "react";
import { CityInfoProps } from "../../types/cityTypes";

export default function CitysList({
  searchResults,
}: {
  searchResults: CityInfoProps[] | undefined;
}) {
  const [showResultList, setShowResultList] = useState(false);
  useEffect(() => {
      if(searchResults && searchResults.length > 1){
          setShowResultList(true)
      }
  }, [searchResults])
  
  if (!searchResults) return;
    
  return (
    <ul className="absolute inset-0 z-10 bg-slate-600 w-100 h-fit translate-y-9 space-y-4">
      {showResultList &&
        searchResults.map((city) => {
          return (
            <li
              key={city.id}
              onClick={() => {
                console.log(city);
                setShowResultList(false);
              }}
            >
              <h3>{city.admin1}</h3>
            </li>
          );
        })}
    </ul>
  );
}
