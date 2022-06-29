import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PersonPage from "./Components/Pages/PersonPage";
import PlanetPage from "./Components/Pages/PlanetPage";
import StarshipPage from "./Components/Pages/StarshipPage";
import NotFound from "./Components/NotFound/NotFound";
import HomePage from "./Components/Pages/HomePage";
import PlanetDetails from "./Components/PlanetDetails/PlanetDetails";
import StarshipDetails from "./Components/StarshipDetails/StarshipDetails";
import "./App.scss";

function App() {
  return (
    <div className={"container"}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="people" element={<PersonPage />} />
        <Route path="planets" element={<PlanetPage />} />
        <Route path="planets/:id" element={<PlanetDetails />} />
        <Route path="starships" element={<StarshipPage />} />
        <Route path="starships/:id" element={<StarshipDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
