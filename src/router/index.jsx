import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Test from "../views/Test";


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
        path: "/test",
        element: <Test />,
      },
      // {
      //   path: "/asdsa",
      //   element: <Adasda />,
      // },
    ],
  },
]);
