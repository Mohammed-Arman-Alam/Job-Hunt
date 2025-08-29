import { createBrowserRouter } from "react-router";
import App from "../App";


const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello World</div>,  
    },
    {
        path: "/a",
        Component: App
    }
])
export default router;