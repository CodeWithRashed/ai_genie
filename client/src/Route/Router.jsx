import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import UserAuthPage from "../Pages/UserAuthPage";
import HomePage from "../Pages/HomePage";
import DashboardLayout from "../Layout/DashboardLayout";



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
               
            ]
        },
        {
            path: "/login",
            element: <UserAuthPage></UserAuthPage>
        },
        {
            path: "/dashboard",
            element: <DashboardLayout></DashboardLayout>,
            children:[
                {
                    path:"/dashboard",
                    element: <div>Dashboard</div>
                },
                {
                    path:"/dashboard/profile",
                    element: <div>Profile</div>
                },
                {
                    path:"/dashboard/subscription",
                    element: <div>Subscription</div>
                },
                
            ]
        }

])