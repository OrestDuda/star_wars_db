import "./ItemDetails.scss";
import { ListGroup } from "react-bootstrap";

function ItemDetails({ person }) {
  return (
    <div className={"item-details"}>
      <div>
        <img className={"image"} src={person.url} alt={person.name} />
      </div>
      <div className={"container-data"}>
        <ListGroup>
          <h3 className={"title"}>{person.name}</h3>
          <ListGroup.Item className={"list-item"}>
            Gender: {person.gender}
          </ListGroup.Item>
          <ListGroup.Item className={"list-item"}>
            Birth Year: {person.birthYear}
          </ListGroup.Item>
          <ListGroup.Item className={"list-item"}>
            Eye Color: {person.eyeColor}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}

export default ItemDetails;
