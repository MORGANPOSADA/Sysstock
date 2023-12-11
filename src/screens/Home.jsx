//here is where im putting the table
import React, { useEffect, useState } from 'react'
import CustomNavbar from '../components/layout/Nabvar';
import { Outlet } from 'react-router-dom';
//import axios from 'axios';
// import { useFormik } from "formik";
// import {
//     AxiosClientWithInterceptors,
//     AxiosClientWithoutInterceptors,
// } from "../../shared/plugins/axios";
// import * as yup from "yup";


export default function CustomHome() {
    

//     const formik = useFormik({
//         initialValues: {
//             ProfilePhoto: "",
//             name: "",
//             description: "",
//             fecha: "",
//             status: 1,
//             stock: 1,
//             categoria: { id: 1 },
//             prestamos: [],
//             usuario: "",
//         },
//         validationSchema: yup.object().shape({
//             ProfilePhoto: yup.MultipartFile().required("Campo obligatorio"),
//             name: yup.string().required("Campo obligatorio"),
//             description: yup.string().required("Campo obligatorio"),
//             fecha: yup.date().required("Campo obligatorio"),
//             status: yup.boolean().required("Campo obligatorio"),
//             stock: yup.int().required("Campo obligatorio"),
//             categoria: yup.string().required("Campo obligatorio"),
//             prestamos: yup.string().required("Campo obligatorio"),
//             usuario: yup.string().required("Campo obligatorio"),

//         }),
//         onSubmit: async (values, { resetForm }) => {
//             try {
//                 // Imprimir el objeto values antes de enviar la solicitud
//                 console.log("Datos a enviar:", values);

//                 let response = await AxiosClientWithInterceptors.post(
//                     "http://localhost:8080/api-sysstock/equipos/",
//                     values,
//                     {
//                         headers: {
//                             "Content-Type": "application/json",
//                         },
//                     }
//                 ).catch((error) => {
//                     console.error("Error en la solicitud Axios:", error);
//                 });

//                 console.log("Respuesta del servidor:", response);

//                 if (response.statusCode === 200) {
//                     // Registro exitoso
//                     Alert.fire({
//                         title: "Registro Exitoso",
//                         text: "El usuario se registró correctamente.",
//                         icon: "success",
//                         confirmButtonColor: "#3085d6",
//                         confirmButtonText: "Aceptar",
//                     });
//                     resetForm();

//                 } else {
//                     // Error en el registro
//                     Alert.fire({
//                         title: "Error en el Registro",
//                         text: "Hubo un problema al registrar el usuario.",
//                         icon: "error",
//                         confirmButtonColor: "#3085d6",
//                         confirmButtonText: "Aceptar",
//                     });
//                 }
//             } catch (error) {
//                 // Manejo de errores
//                 console.error("Error al registrar equipo:", error);

//                 if (error.response) {
//                     console.error("Error de servidor:", error.response.data);
//                 } else if (error.request) {
//                     console.error("No se recibió respuesta del servidor");
//                 } else {
//                     console.error(
//                         "Error de configuración de la solicitud:",
//                         error.message
//                     );
//                 }

//                 Alert.fire({
//                     title: "Error",
//                     text: "Ocurrió un error al intentar registrar el equipo.",
//                     icon: "error",
//                     confirmButtonColor: "#3085d6",
//                     confirmButtonText: "Aceptar",
//                 });

//                 resetForm();

//             }
//         },
//     });

    return (
        <>
        <CustomNavbar/>
        <Outlet/>
            
        </>
    )
}
