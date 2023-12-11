import { createBrowserRouter } from "react-router-dom";
import CustomHome from "./screens/Home";
import Table from "./components/layout/Table";
import CustomTable from "./components/layout/Table";
import Usuarios from "./components/layout/Usuarios";
import Prestamos from "./components/layout/Prestamos";
const routes= createBrowserRouter([
    { path: "/", element: <CustomHome/>, children: [{path: "/", element: <CustomTable/>}, {path:"/usuarios", element: <Usuarios/>},
    {path:"/prestamos", element: <Prestamos/>}]}

])
export default routes 