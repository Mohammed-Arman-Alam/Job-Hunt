import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import Profile from "../pages/Profile";
import PrivateRoute from "../authProvider/PrivateRoute";
import HomePage from "../pages/HomePage";
import CompanyDetails from "../pages/CompanyDetails";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children:[
            {
                index: true,
                Component: HomePage,
            },
            {
                path: "/Register",
                Component: RegisterPage,
            },
            {
                path: "/Login",
                Component: LoginPage,
            },
            {
                path:'/Profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path:'Company/Details/:id',
                element:<PrivateRoute><CompanyDetails></CompanyDetails></PrivateRoute>,
                loader: ()=>fetch('/job.json'),
                hydrateFallbackElement: <h1>Loading..........</h1>
            },
            {
                path: '/*',
                Component: ErrorPage,
            }
        ]
    },
    
])
export default router;