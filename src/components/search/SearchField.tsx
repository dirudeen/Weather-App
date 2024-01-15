import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { fetchCityInfo } from "../../apis";



export default function SearchField() {
  const [city, setCity] = useState("");
  const { refetch } = useQuery({
    queryKey:["getCityInfo"],
    queryFn: async () => await fetchCityInfo(city),
    enabled: false
  })

  return (
    <>
      <div className="flex items-center gap-1 rounded-md border-slate-400 border text-white px-4 py-2">
        <CiSearch className="text-2xl text-white font-semibold" />
        <form>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-transparent px-3 py-1 placeholder:text-slate-200 focus:outline-none"
            placeholder="search for city"
          />
        </form>
      </div>
    </>
  );
}
