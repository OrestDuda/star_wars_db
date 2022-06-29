import "./StarshipDetails.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStarship } from "../../Services";
import { SpinnerCircularSplit } from "spinners-react";
import Error from "../Error/Error";

function StarshipDetails() {
  const params = useParams();
  const [starship, setStarship] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getStarship(params.id)
      .then((data) => setStarship(data))
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
  const content = hasData ? <StarshipDetailsView starship={starship} /> : null;

  return (
    <div className={"planet-details-container"}>
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
}

function StarshipDetailsView({ starship }) {
  const {
    name,
    model,
    manufacturer,
    costInCredits,
    length,
    crew,
    passengers,
    cargoCapacity,
    url,
  } = starship;

  return (
    <>
      <img className={"image"} src={url} alt={name} />
      <ul>
        <li>Name: {name}</li>
        <li>Model: {model}</li>
        <li>Manufacturer: {manufacturer}</li>
        <li>Cost In Credits : {costInCredits}</li>
        <li>Length : {length}</li>
        <li>Crew : {crew}</li>
        <li>Passengers : {passengers}</li>
        <li>Cargo Capacity : {cargoCapacity}</li>
      </ul>
    </>
  );
}

export default StarshipDetails;
