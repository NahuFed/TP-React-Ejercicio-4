// import { Form, Button } from "react-bootstrap"; se pueden agregar varios componentes entre llaves
import Form from 'react-bootstrap/Form' //Se importa uno solo por linea
import Button from 'react-bootstrap/Button'
import ListaTareas from './ListaTareas';


const FormularioTarea = () => {
    return (
        <>
            <Form>
      <Form.Group className="mb-3 d-flex" controlId="tarea">
               <Form.Control type="text" placeholder="Ingeresa una tarea" />
               <Button variant='success'>Agregar</Button>
      </Form.Group>
    </Form>
    <ListaTareas></ListaTareas>
        </>
  
        
    );
};

export default FormularioTarea;