import { useQuery } from "@tanstack/react-query";
import useDebounce from "./useDebounce";
import { fetchCityInfo } from "../apis";
import { useEffect } from "react";

export default function useFetchCityQuery(city: string) {
  const debounce = useDebounce(city);
  const {
    data: result,
    error,
    isError,
    isLoading: isCityLoading,
    refetch,
  } = useQuery({
    queryKey: ["getCityInfo"],
    queryFn: async () => await fetchCityInfo(debounce),
    enabled: false,
  });

 // asserts data to be a non nullish type
  const data = result ?? []

  useEffect(() => {
    const fetchData = async () => await refetch();

    if (debounce.length > 2) {
      fetchData();
    }
  }, [debounce, refetch]);
  return {
    data,
    isError,
    isCityLoading,
    error,
  };
}
