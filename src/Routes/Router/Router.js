import { async } from "@firebase/util";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import AddService from "../../Pages/Services/AddService";
import Review from "../../Pages/Services/Review";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import SeviceReview from "../../Pages/Services/SeviceReview";
import Login from "../../Pages/Shared/Login/Login";
import Registation from "../../Pages/Shared/Login/Registation";
import ReviewMe from "../../Pages/Shared/ReviewMe/ReviewMe";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: <Services></Services>
            },
            {
                path: '/services/:serviceId',
                loader: async ({ params }) => {
                    return fetch(`https://wedding-photographer-server-woad.vercel.app/services/${params.serviceId}`)

                },
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
               
                
            },
           

            {
                path: '/reviews',
                element: <PrivateRoute><ReviewMe></ReviewMe></PrivateRoute>
            },

            {
                path: '/reviews/:reviewsId',
                loader: async({params}) =>{
                    return fetch(`https://wedding-photographer-server-woad.vercel.app/reviews/${params.reviewsId}`)

                },
                element: <PrivateRoute><Review></Review></PrivateRoute>
            },

            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            }
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;