import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";

function App() {
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
