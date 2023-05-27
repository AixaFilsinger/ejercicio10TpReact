import { Container, Form, Button } from "react-bootstrap";
import ContenedorCard from "./ContenedorCard";
import { useState, useEffect } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");
  const [genero, setGenero] = useState("");
  let peliculasEnLocalStorage = JSON.parse(localStorage.getItem('peliculas')) || [];
  const [peliculas, setPeliculas] = useState([peliculasEnLocalStorage]);
 
 
  useEffect(()=>{
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  const eventoSubmit= (e) =>{
    e.preventDefault();
    let objetos = {nombre, descripcion, imagen, genero}
    setPeliculas([...peliculas, objetos])
    limpiarForm();

  }

  const limpiarForm = ()=>{
    setNombre("");
    setDescripcion("");
    setImagen("");
    setGenero("");
    document.getElementById("formulario").reset();

  }

  
  return (
    <Container>
      <Form onSubmit={eventoSubmit} id="formulario">
        <Form.Group className="mb-3 text-light fs-3 fw-semibold" controlId="nom">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ej Macarena" onChange={(e)=> setNombre(e.target.value) }/>
        </Form.Group>
        <Form.Group className="mb-3 text-light fs-3 fw-semibold" controlId="txt-descripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(e)=> setDescripcion(e.target.value) }/>
        </Form.Group>
        <Form.Group className="mb-3 text-light fs-3 fw-semibold" controlId="imagen">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="text" placeholder="Ej https://cdn-icons-png.flaticon.com/512/678/678100.png" onChange={(e)=> setImagen(e.target.value) }/>
        </Form.Group>
        <Form.Group className="mb-3 " controlId="selec-genero">
          <Form.Select aria-label="opciones" onChange={(e)=> setGenero(e.target.value) }>
            <option>Generos</option>
            <option value="Comedia">Comedia</option>
            <option value="Drama">Drama</option>
            <option value="Infantil">Infantil</option>
          </Form.Select>
        </Form.Group>
        <div className="text-center">
          <Button variant="dark" type="submit" size="lg">
          Enviar
        </Button>
        </div>
        
      </Form>
      <section className="mt-5">
        <ContenedorCard peliculas= {peliculas}></ContenedorCard>
      </section>
      
    </Container>
  );
};

export default Formulario;
