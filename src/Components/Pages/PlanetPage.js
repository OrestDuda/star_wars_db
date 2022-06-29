import { useEffect, useState } from "react";
import { getAllPlanets } from "../../Services";
import PlanetList from "../PlanetList/PlanetList";
import Error from "../Error/Error";
import { SpinnerCircularSplit } from "spinners-react";
import "./Pages.scss";

function PlanetPage() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllPlanets()
      .then((data) => {
        setPlanets(data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const hasData = !(loading || error);
  const errorMessage = error ? <Error /> : null;
  const spinner = loading ? (
    <SpinnerCircularSplit size={"250px"} className={"spinner"} />
  ) : null;
  const content = hasData ? <PlanetList data={planets} /> : null;

  return (
    <div className={"planet-list-container"}>
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
}

export default PlanetPage;
