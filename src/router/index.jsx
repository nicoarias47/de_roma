import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import About from "../views/About";
import Faq from "../views/Faq";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Products from "../views/Products";
import Shipping from "../views/Shipping";

// Aqui van las rutas de las paginas del proyecto
export const router = createBrowserRouter([
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
        path: "/about",
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
        path: "/preguntas_frecuentes",
        element: <Faq />,
      },
    ],
  },
]);
