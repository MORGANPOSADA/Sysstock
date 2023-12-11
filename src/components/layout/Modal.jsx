//literally my button for add products
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
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from 'date-fns/locale/es'; // Importa el idioma español
registerLocale('es', es)
import './estilos.css';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';


export default function CustomModal(props) {

    const [validated, setValidated] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null); //subir img

    const formik = useFormik({
        initialValues: {
            "name": "",
            "description": "",
            "fecha": null,
            "status": true,
            "stock": "",
            "categoria": "",
            "usuario": "",
            "profilePhoto": "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Campo obligatorio"),
            description: yup.string().required("Campo obligatorio"),
            fecha: yup.date().required("Campo obligatorio"),
            status: yup.boolean().required("Campo obligatorio"),
            stock: yup.number().required("Campo obligatorio"),
            categoria: yup.number().required("Campo obligatorio"),
            usuario: yup.number().required("Campo obligatorio"),
            profilePhoto: yup.mixed().required('fileType', 'El archivo debe ser de tipo imagen')
        },),

        onSubmit: async (values) => {
            const formData = new FormData(values)
            try {
                const respuesta = await axios.post("http://localhost:8080/api-sysstock/equipos/", formData)
                console.log(respuesta.data)
            } catch (error) {
                console.log(error)

            }


        }

    })


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



    return (
        <>
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton className='custom-modal2'>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Añadir equipo
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='custom-modal' >
                    <Container>
                        <Row>
                            <Col>
                                <Form onSubmit={formik.handleSubmit}>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Seleccionar imagen (.png, .jpg)</Form.Label>
                                        <Form.Control type="file" accept=".png, .jpg" onChange={handleFileChange}/>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="name1">
                                    <Form.Label>Nombre:</Form.Label>
                                    <Form.Control
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                        required
                                        type="text"
                                        placeholder="Laptop"
                                    />
                                    <Form.Control.Feedback >Correcto!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="categoria1">
                                    <Form.Label>Categoría</Form.Label>
                                    <Form.Control
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.categoria}
                                        required
                                        type="text"
                                        placeholder="Informática"
                                    />
                                    <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-6">
                                <Form.Group as={Col} md="6" controlId="descripcion1">
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control type="text" placeholder="..." required
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.description} />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingrese una descripción
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="6" controlId="fecha1">
                                    <Form.Label>Fecha</Form.Label>
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        onBlur={() => {
                                            formik.setFieldTouched("fecha", true); // Marca el campo como tocado
                                        }}
                                        dateFormat="dd-mm-yyyy"
                                        placeholderText="DD-MM-YYYY"
                                        className="form-control"
                                        required
                                        locale={es} // Establece el idioma español
                                    />
                                    
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingrese la fecha de registro
                                    </Form.Control.Feedback>
                                </Form.Group>

                            </Row>
                            <br />
                            <br />
                            <Button variant="success" type="submit">Guardar</Button>
                        
                    </Container>
                </Modal.Body>
                
            </Modal>
        </>
    );
}