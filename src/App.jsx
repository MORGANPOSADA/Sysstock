import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import DataTable from 'react-data-table-component';
import CustomModal from './components/layout/Modal';
// import CustomModal from 'react-bootstrap/Modal';
import { RouterProvider } from 'react-router-dom';


function App() {
  const [modalShow, setModalShow] = useState(false); //for modal
  
  return (
    <>
    
      {/* iniicio de mi navbar ctrl kc, se pasa al componente layout, y aqui solo lo importamos */}
      
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


