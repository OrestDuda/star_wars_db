import "./StartshipList.scss";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function StarshipList({ data, getID }) {
  function handleClick(event) {
    getID(event.target.id);
  }

  const content = data.map((item) => (
    <ListGroup.Item
      key={item.id}
      id={item.id}
      className={"list-item"}
      onClick={handleClick}
    >
      <Link to={`/starships/${item.id}`}>
        {`${item.name}, ( Length: ${item.length}, Max Speed: ${item.maxSpeed} )`}
      </Link>
    </ListGroup.Item>
  ));

  return <ListGroup className={"starship-list"}>{content}</ListGroup>;
}
export default StarshipList;
