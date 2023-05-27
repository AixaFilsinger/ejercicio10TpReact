import { Container, Form, Button } from "react-bootstrap";
import ContenedorCard from "./ContenedorCard";

const Formulario = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="nom">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ej Macarena" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="txt-descripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagen">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="text" placeholder="Ej https://cdn-icons-png.flaticon.com/512/678/678100.png" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="selec-genero">
          <Form.Select aria-label="opciones">
            <option>Generos</option>
            <option value="Comedia">Comedia</option>
            <option value="Drama">Drama</option>
            <option value="Infantil">Infantil</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      <ContenedorCard></ContenedorCard>
    </Container>
  );
};

export default Formulario;
