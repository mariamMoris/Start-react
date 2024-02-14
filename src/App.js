import React from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from './components/Portfolio'
import Contact from "./components/Contact";
import Notfound from "./components/Notfound";

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Navigate to ="/home" /> },
        {path: "home", element:<Home/>},
        {path: "about", element:<About/>},
        {path: "portfolio", element:<Portfolio/>},
        {path: "contact", element:<Contact/>},
        {path: "*",element: <Notfound/>}
      ],
    },
    
  ]);
  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>;
}
