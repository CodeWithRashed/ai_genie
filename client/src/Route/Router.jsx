import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import UserAuthPage from "../Pages/UserAuthPage";
import HomePage from "../Pages/HomePage";



export const router = createBrowserRouter ([
    
        {
            path: "/",
            element: <MainLayout></MainLayout>,
            errorElement: <div>Wrong Route</div>,
            children: [
                {
                    path: "/",
                    element: <HomePage></HomePage>
                },
                {
                    path: "/about",
                    element: <div>About</div>
                },
                {
                    path: "/contact",
                    element: <div>Contact</div>
                }
            ]
        },
        {
            path: "/login",
            element: <UserAuthPage></UserAuthPage>
        }

])