import { useEffect } from "react";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import useCityContext from "./hooks/useCityContext";
import { fetchCurrrentWeatherCondition } from "./apis";

function App() {
  const { city } = useCityContext();

  useEffect(() => {
    const fetchData = async () => {
      const lat = city!.latitude;
      const long = city!.longitude;
      const result = await fetchCurrrentWeatherCondition({ lat, long });
      console.log(result);
    };
    if (city) {
      fetchData();
    }
  }, [city]);

  return (
    <Layout>
      <section className="outline-dashed outline-red-400 w-[60rem] bg-slate-900 mx-auto">
        <Header />

        {/* {MAIN SECTION THAT CONTAINERE ALL THE GRID ITEMS} */}
      </section>
    </Layout>
  );
}

export default App;
