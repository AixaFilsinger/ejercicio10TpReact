import { Col, Card } from "react-bootstrap";

const CardForm = ({ pelicula }) => {
  return (
    <Col xs={12} md={4} className="mb-3">
      <Card>
        <Card.Img variant="top" src={pelicula.imagen} className="h-100" />
        <Card.Body>
          <Card.Title className="fw-semibold text-center fs-1">{pelicula.nombre}</Card.Title>
          <Card.Text className="fw-semibold fs-5">Genero:{pelicula.genero}</Card.Text>
          <Card.Text>{pelicula.descripcion}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardForm;
