import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container } from 'react-bootstrap';
import Formulario from "./Components/Formulario"

function App() {
  

  return (
    <>
    <Container>
      <h1 className='display-1 text-center fw-bold'>Peliculas</h1>
      <Formulario></Formulario>
    </Container>
    <footer className='p-3 text-center fst-italic'>
      <p>©Todos los derechos reservados™</p>
    </footer>
     
    </>
  )
}

export default App
