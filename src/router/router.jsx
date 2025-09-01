import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children:[
            {
                path: "/Register",
                Component: RegisterPage,
            },
            {
                path: "/Login",
                Component: LoginPage,
            }
        ]
    },
    {
       
    }
])
export default router;