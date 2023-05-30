import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareas}) => {
  return (
    <div>
      <ListGroup className="rounded">
        {
          tareas.map((tarea,indiceTarea)=>   <ItemTarea nombreTarea={tarea} key={indiceTarea}></ItemTarea>)
        }
      
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
