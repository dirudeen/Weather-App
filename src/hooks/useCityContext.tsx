import { useContext } from "react";
import { CityContext } from "../provider/context";

export default function useCityContext() {
  const context = useContext(CityContext);
  return context;
}
