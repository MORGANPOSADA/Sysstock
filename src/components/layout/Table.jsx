import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import App from '../../App';

export default function CustomTable() {
  return (
    <div>
        <App/>
      <Table striped bordered hover className='shadow'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                     {/* {
                        products.map((product, index) => (
                            <tr>
                                <th scope='row' key={index}>
                                    {index + 1}</th>
                                <td>{product.ProfilePhoto}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.fecha}</td>
                                <td>{product.status}</td>
                                <td>{product.categoria.name}</td>
                            </tr>

                        ))
                    }      */}
                </tbody>
            </Table>
    </div>
  )
}
