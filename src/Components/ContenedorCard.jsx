import { Container, Row, Col } from "react-bootstrap";
import CardForm from "./CardForm";

const ContenedorCard = () => {
  return (
    <Container>
      <Row>
        <Col>
        <CardForm></CardForm>
        </Col>
      </Row>
    </Container>
  );
};

export default ContenedorCard;
