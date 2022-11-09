import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import AddService from "../../Pages/Services/AddService";
import Services from "../../Pages/Services/Services";
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
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                // loader: 'http://localhost:5000/services',
                element: <Services></Services>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            }
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;