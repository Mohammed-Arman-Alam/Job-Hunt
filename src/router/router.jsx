import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../layout/HomeLayout";


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
    },
    {
        path: "/a",
        Component: App
    }
])
export default router;