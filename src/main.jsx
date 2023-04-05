import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Home from "./components/Layout/Home";
import Order from "./components/Orders/Order";
import Inventoy from "./components/Inventory/Inventoy";
import Login from "./components/Login/Login";
import cartProductsLoader from "./loaders/CartProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path: "/",
        element:<Shop></Shop>
      },
      {
    path:'order',
    element:<Order></Order>,
    loader: cartProductsLoader
      },
      {
        path:'/inventory',
        element:<Inventoy></Inventoy>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
