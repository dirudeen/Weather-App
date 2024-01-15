import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useFetchCityQuery from "../../hooks/useFetchCityQuery";
import CitysList from "../cityInfoList/CitysList";

export default function SearchField() {
  const [city, setCity] = useState("");
  const { data, isCityLoading, error, isError } = useFetchCityQuery(city);

  return (
      <div className="flex relative focus-within:border-slate-400 items-center gap-1 rounded-lg border-slate-600 border text-white px-4 py-0.5 max-w-[24rem] w-full">
        <CiSearch className="text-2xl text-white font-semibold" />
        <form className="flex-1">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-transparent px-3 py-1 placeholder:text-slate-200 focus:outline-none w-full"
            placeholder="search for city"
          />
        </form>

        <CitysList searchResults={data}  showList={city} onHideList={() => setCity("")}/>
      </div>
  );
}
