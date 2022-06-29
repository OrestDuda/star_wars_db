import "./PersonList.scss";
import { ListGroup } from "react-bootstrap";

function PersonList({ data, getID }) {
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
      {item.name}
    </ListGroup.Item>
  ));

  return <ListGroup>{content}</ListGroup>;
}
export default PersonList;
