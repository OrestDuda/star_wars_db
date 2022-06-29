import "./PlanetList.scss";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function PlanetList({ data }) {
  const content = data.map((item) => (
    <ListGroup.Item key={item.id} id={item.id} className={"list-item"}>
      <Link to={`/planets/${item.id}`}>
        {`${item.name}, ( Climate: ${item.climate}, Terrain: ${item.terrain} )`}
      </Link>
    </ListGroup.Item>
  ));

  return <ListGroup className={"planet-list"}>{content}</ListGroup>;
}
export default PlanetList;
