import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Shared/Login/Login";
import Registation from "../../Pages/Shared/Login/Registation";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Registation></Registation>
            }
        ]
    }
])

export default router;