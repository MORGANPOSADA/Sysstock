import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 import DatePicker from 'react-datepicker';
 import 'react-datepicker/dist/react-datepicker.css';
 import { registerLocale, setDefaultLocale } from  "react-datepicker";
 import es from 'date-fns/locale/es'; // Importa el idioma español
 registerLocale('es', es)
import './estilos.css';
import axios from 'axios';


export default function CustomModal(props) {

    const [validated, setValidated] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null); //subir img

    //esto es para la parte de subir img

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };
    //subir img
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(selectedFile);
    };


     const handleDateChange = (date) => {
        setSelectedDate(date);
     };

    const handleSubmit = async(event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
         await axios.post('http://localhost:8080/api-sysstock/equipos/', {ProfilePhoto:formFile, name: name1, categoria:categoria1, description: descripcion1, fecha:fecha1})
         .then (()=>console.log('Guardado exitosamente')).catch((error)=>console.log(error))

        setValidated(true);
    };

    return (
        <>
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton className='custom-modal2'>
                    <Modal.Title  id="contained-modal-title-vcenter">
                        Añadir equipo
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='custom-modal' >
                    <Container>
                        <Row>
                            <Col>
                                <Form onSubmit={handleFormSubmit}>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Seleccionar imagen (.png, .jpg)</Form.Label>
                                        <Form.Control type="file" accept=".png, .jpg" onChange={handleFileChange} />
                                    </Form.Group>
                                    </Form>
                            </Col>
                            {/* <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col> */}
                        </Row>


                        {/* AQUI INICIA EL FORMULARIO AÑADIR EQUIPO */}
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="name1">
                                    <Form.Label>Nombre:</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Laptop"
                                    // defaultValue="Mark"
                                    />
                                    <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="categoria1">
                                    <Form.Label>Categoría</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Informática"
                                    //defaultValue="Otto"
                                    />
                                    <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-6">
                                <Form.Group as={Col} md="6" controlId="descripcion1">
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control type="text" placeholder="..." required />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingrese una descripción
                                    </Form.Control.Feedback>
                                </Form.Group>

                                 <Form.Group as={Col} md="6" controlId="fecha1">
                                    <Form.Label>Fecha</Form.Label>
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        dateFormat="MM-dd-yyyy"
                                        placeholderText="MM-DD-YYYY"
                                        className="form-control"
                                        required
                                        locale={es} // Establece el idioma español
                                    />
                                    {/* <Form.Control type="text" placeholder="" required /> */}
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingrese la fecha de registro
                                    </Form.Control.Feedback>
                                </Form.Group> 

                            </Row>
                            <br />
                            <br />
                            <Button variant="success" type="submit">Guardar</Button>

                        </Form>

                        {/* <Row>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                        </Row> */}
                    </Container>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}