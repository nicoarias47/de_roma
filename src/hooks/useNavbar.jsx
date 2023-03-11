import { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";

const paths = {
  home: {
    name: "Inicio",
    path: "/",
  },
  products: {
    name: "Productos",
    path: "/productos",
    children: {
      home: {
        name: "Living & Deco",
        path: "/hogar_y_deco",
      },
      flavorings: {
        name: "Aromatizantes",
        path: "/aromatizantes",
      },
      bathroom: {
        name: "Baño",
        path: "/banio",
      },
      textile: {
        name: "Textil",
        path: "/textil",
      },
      garden: {
        name: "Jardín",
        path: "/jardin",
      },
      container: {
        name: "Contenedores",
        path: "/contenedores",
      },
    },
  },
  about: {
    name: "Quienes somos",
    path: "/acerca_de_nosotras",
  },
  shipping: {
    name: "Envíos",
    path: "/envios",
  },
  paymentMethods: {
    name: "Medios de pago",
    path: "/medios_de_pago",
  },
  faq: {
    name: "Preguntas frecuentes",
    path: "/preguntas_frecuentes",
  },
  contact: {
    name: "Contacto",
    path: "/contacto",
  },
};

export const useNavbar = () => {
  //const [navbarClasses, setNavbarClasses] = useState();
  const [navbarClasses, setNavbarClasses] = useState("navbar");
  const [positionY, setPositionY] = useState(0);
  const isHome = useMatch("/");

  // window.onscroll = function () {
  //   setPositionY(window.scrollY);
  // };

  // useEffect(() => {
  //   if (isHome && positionY === 0) {
  //     setNavbarClasses("navbar-home");
  //   } else {
  //     setNavbarClasses("navbar");
  //   }
  // }, [isHome, positionY]);

  return { navbarClasses, paths };
};
