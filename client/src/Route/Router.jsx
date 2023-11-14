import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import UserAuthPage from "../Pages/UserAuthPage";

export const router = createBrowserRouter ([
    
        {
            path: "/",
            element: <MainLayout></MainLayout>,
            errorElement: <div>Wrong Route</div>,
            children: [
                {
                    path: "/",
                    element: <div>HomePage</div>
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