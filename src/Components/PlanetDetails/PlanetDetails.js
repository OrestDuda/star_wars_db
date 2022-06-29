import "./PlanetDetails.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPlanet } from "../../Services";
import { SpinnerCircularSplit } from "spinners-react";
import Error from "../Error/Error";

function PlanetDetails() {
  const params = useParams();
  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPlanet(params.id)
      .then((data) => setPlanet(data))
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [params.id]);

  const hasData = !(loading || error);
  const errorMessage = error ? <Error /> : null;
  const spinner = loading ? (
    <SpinnerCircularSplit size={"250px"} className={"spinner"} />
  ) : null;
  const content = hasData ? <PlanetDetailsView planet={planet} /> : null;

  return (
    <div className={"planet-details-container"}>
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
}

function PlanetDetailsView({ planet }) {
  const {
    name,
    population,
    rotationPeriod,
    diameter,
    orbitalPeriod,
    gravity,
    terrain,
    url,
  } = planet;

  return (
    <>
      <img className={"image"} src={url} alt={name} />
      <ul>
        <li>Name: {name}</li>
        <li>Population: {population}</li>
        <li>Rotation Period: {rotationPeriod}</li>
        <li>Diameter : {diameter}</li>
        <li>Orbital Period : {orbitalPeriod}</li>
        <li>Gravity : {gravity}</li>
        <li>Terrain : {terrain}</li>
      </ul>
    </>
  );
}

export default PlanetDetails;
