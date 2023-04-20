import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainPage} from "../pages/mainPage/mainPage.jsx";
import {OrderForm} from "../components/order/orderForm.jsx";
import {OrderPage} from "../pages/orderPage/orderPage.jsx";
import {useContext} from "react";
import {Context} from "../App.jsx";


export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
    },
    {
        path: '*',
        element: <MainPage/>
    }
]);

export const privateRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
    },
    {
        path: '/order',
        element: <OrderPage/>
    },
    {
        path: '*',
        element: <MainPage/>
    }

]);



export const Navigation = () =>{
    const {isAuth} = useContext(Context)
    return(
        <RouterProvider router={isAuth === true ? privateRoutes : publicRoutes}></RouterProvider>
    )
}




