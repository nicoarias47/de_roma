import { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";

const paths = {
  home: {
    name: "home",
    path: "/",
  },
  products: {
    name: "productos",
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
    },
  },
  about: {
    name: "quienes somos",
    path: "/quienes_somos",
  },
  shipping: {
    name: "envios",
    path: "/envios",
  },
  paymentMethods: {
    name: "metodos de pago",
    path: "/medios_de_pago",
  },
  faq: {
    name: "preguntas frecuentes",
    path: "/preguntas_frecuentes",
  },
  contact: {
    name: "contacto",
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
