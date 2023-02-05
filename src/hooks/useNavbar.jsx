import { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";

const paths = {
  home: {
    name: "Home",
    path: "/",
  },
  products: {
    name: "Productos",
    path: "/productos",
    children: {
      home: {
        name: "Hogar y deco",
        path: "/hogar_y_deco",
      },
      flavorings: {
        name: "Aromatizantes",
        path: "/aromatizantes",
      },
      bathroom: {
        name: "Baño",
        path: "/baño",
      },
      textile: {
        name: "Textil",
        path: "/textil",
      },
      garden: {
        name: "Jardín",
        path: "/jardin",
      },
      organization: {
        name: "Organización",
        path: "/organizacion",
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
  const [navbarClasses, setNavbarClasses] = useState();
  const [positionY, setPositionY] = useState(0);
  const isHome = useMatch("/");

  window.onscroll = function () {
    setPositionY(window.scrollY);
  };

  useEffect(() => {
    if (isHome && positionY === 0) {
      setNavbarClasses("navbar-home");
    } else {
      setNavbarClasses("navbar");
    }
  }, [isHome, positionY]);

  return { navbarClasses, paths };
};
