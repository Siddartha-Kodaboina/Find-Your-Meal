import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Body";
import UserContextProvider from "./context/userContextProvider";
import Footer from "./components/Footer.js";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import About from "./components/About.js";
import { Auth0Provider } from '@auth0/auth0-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";


const AppLayout=()=>{
    return(
        <Auth0Provider
        domain= "dev-4sxd0k2jlm0tsmtv.us.auth0.com"
        clientId="boXEG8xQBa2CzaVFfE0lft7bBqXHHNdS"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}>
        <UserContextProvider>
        <div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
        </UserContextProvider>
        <ToastContainer/>
        </Auth0Provider>
    )
}
const appRouter=createBrowserRouter([
    {
    path:'/',
    element:<AppLayout/>,
    children:[
        {
            path:'/',
            element:<Body/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/contact',
            element:<Contact/>
        },
        {
            path:'/restaurant/:resId',
            element:<RestaurantMenu/>
        },
    ],
    errorElement:<Error/>
    },
    

])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router={appRouter}/>);