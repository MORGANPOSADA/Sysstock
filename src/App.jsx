import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import CustomNavbar from './components/layout/Nabvar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import DataTable from 'react-data-table-component';
import CustomModal from './components/layout/Modal';
// import CustomModal from 'react-bootstrap/Modal';
import CustomHome from './pages/Home';


function App() {
  const [modalShow, setModalShow] = useState(false); //for modal
  

  // const columns = [
  //   {
  //     name: "ID",
  //     selector: row => row.id,
  //     //sortable: true

  //   },
  //   {
  //     name: "Equipo",
  //     selector: row => row.equipo,
  //     //sortable: true

  //   },
  //   {
  //     name: "Nombre",
  //     selector: row => row.nombre,
  //     //sortable: true

  //   },
  //   {
  //     name: "Fecha",
  //     selector: row => row.fecha,
  //     //sortable: true

  //   },
  //   {
  //     name: "Descripción",
  //     selector: row => row.descripcion,
  //     //sortable: true

  //   },
  //   {
  //     name: "Categoría",
  //     selector: row => row.categoria.name,
  //     //sortable: true

  //   },
  //   {
  //     name: "Estatus",
  //     selector: row => row.estatus,
  //     //sortable: true

  //   },

  //   {
  //     name: "Acción",
  //     cell: (row) => (
  //       <>
  //         <Button variant="light" onClick={() => edit(row.id)}>Editar</Button>
  //         <Button variant="light" onClick={() => deleteEquipo(row.id)}>Eliminar</Button>

  //       </>
  //     )
  //   },
  // ];

  // const data = [
  //   {
  //     id: "1",
  //     equipo: "imagen1",
  //     nombre: "laptop",
  //     fecha: "15/04/2023",
  //     descripcion: "laptop para uso escolar",
  //     categoria: {
  //       id: 1,
  //       name: "Tranfer bank"
  //     },
  //     estatus: "activo",
  //   }
  // ]

  return (
    <>
      {/* iniicio de mi navbar ctrl kc, se pasa al componente layout, y aqui solo lo importamos */}
      <CustomNavbar />
       <CustomModal /> 


      <Container fluid>
        {/* inicio fila 1 */}
        <Row className='mt-3'>
          <Col>
            <Form>
              <Form.Control placeholder="Buscar..." />
            </Form>

          </Col>
           <Col className='text-end'>
            <Button variant="success" onClick={() => setModalShow(true)}>Añadir equipo</Button>
            <CustomModal show={modalShow} onHide={() => setModalShow(false)} />
          </Col> 

        </Row>

        {/* inicio fila 2 */}
        <Row>
        <br />
       <CustomHome />


            {/* <Col>
            <DataTable
              columns={columns}
              data={data}
              pagination
            />
          </Col>   */}

        </Row>

      </Container>
    </>
  );
}
export default App


