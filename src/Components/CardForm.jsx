import { Container, Card } from "react-bootstrap";

const CardForm = () => {
  return (
    <Container>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" className="h-100"/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardForm;
