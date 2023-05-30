import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = () => {
  return (
    <div>
      <ListGroup>
        <ItemTarea></ItemTarea>
        <ItemTarea></ItemTarea>
        <ItemTarea></ItemTarea>
        <ItemTarea></ItemTarea>
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
