import { Container, Row, Col } from "react-bootstrap";
import CardForm from "./CardForm";

const ContenedorCard = ({peliculas}) => {
  return (
    <Container>
      <Row>
         {peliculas.map((pelicula, indice)=> <CardForm key={indice} pelicula={pelicula}></CardForm>)}
      </Row>
    </Container>
  );
};

export default ContenedorCard;
