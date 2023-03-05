import { createBrowserRouter, createHashRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import About from "../views/About";
import Contact from "../views/Contact";
import Faq from "../views/Faq";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Payment from "../views/Payment";
import Products from "../views/Products";
import Shipping from "../views/Shipping";

export const router = createHashRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/acerca_de_nosotras",
        element: <About />,
      },
      {
        path: "/productos",
        element: <Products />,
        children: [{ path: "/productos/:producto" }],
      },
      {
        path: "/envios",
        element: <Shipping />,
      },
      {
        path: "/contacto",
        element: <Contact />,
      },
      {
        path: "/preguntas_frecuentes",
        element: <Faq />,
      },
      {
        path: "/medios_de_pago",
        element: <Payment />,
      },
    ],
  },
]);
