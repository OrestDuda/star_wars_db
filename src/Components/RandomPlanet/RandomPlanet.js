import "./RandomPlanet.scss";
import { getPlanet } from "../../Services";
import Error from "../Error/Error";
import { ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { SpinnerCircularSplit } from "spinners-react";

function RandomPlanet() {
  const id = Math.floor(Math.random() * 17 + 2);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    function onError() {
      setError(true);
      setLoading(false);
    }

    function updatePlanet() {
      getPlanet(id)
        .then((item) => {
          setPlanet(item);
        })
        .then(() => {
          setLoading(false);
        })
        .catch(onError);
    }
    updatePlanet();
  }, []);

  const hasData = !(loading || error);
  const errorMessage = error ? <Error /> : null;
  const spinner = loading ? (
    <SpinnerCircularSplit size={"250px"} className={"spinner"} />
  ) : null;
  const content = hasData ? <PlanetView planet={planet} /> : null;

  return (
    <div className={"random-planet-container"}>
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
}

function PlanetView({ planet }) {
  const { name, population, rotationPeriod, diameter, url } = planet;

  return (
    <>
      <div>
        <img className={"image"} src={url} alt={name} />
      </div>
      <div className={"container-data"}>
        <ListGroup>
          <h3 className={"title"}>{name}</h3>
          <ListGroup.Item className={"list-item"}>
            Population: {population}
          </ListGroup.Item>
          <ListGroup.Item className={"list-item"}>
            Rotation Period: {rotationPeriod}
          </ListGroup.Item>
          <ListGroup.Item className={"list-item"}>
            Diameter: {diameter}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}

export default RandomPlanet;
