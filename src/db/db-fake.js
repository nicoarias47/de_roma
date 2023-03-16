import {
  velas,
  difusores,
  bandejas,
  centrosDeMesa,
  ceramica,
  cuadros,
  lamparas,
  relojes,
  cruceDeBañeras,
  dispenser,
  jaboneras,
  portaCepillos,
  alfombras,
  macrame,
  mantas,
  pieDeCama,
  macetas,
  portaMacetas,
  contenedoresDeVidrio,
  dispenser2,
  envasesDeCocina,
} from "./imgs.js";

export const db = {
  aromatizantes: [
    {
      id: 1,
      title: "Aromatizantes",
      list: [
        {
          title: "Difusores",
          img: difusores,
        },
        {
          title: "Velas ",
          img: velas,
        },
      ],
    },
  ],
  banio: [
    {
      id: 2,
      title: "Baño",
      list: [
        {
          title: "Cruce de bañeras",
          img: cruceDeBañeras,
        },
        {
          title: "Dispenser",
          img: dispenser,
        },
        {
          title: "Jaboneras",
          img: jaboneras,
        },
        {
          title: "Porta cepillos",
          img: portaCepillos,
        },
      ],
    },
  ],
  textil: [
    {
      id: 3,
      title: "Textiles",
      list: [
        {
          title: "Alfombras",
          img: alfombras,
        },
        {
          title: "Macramé",
          img: macrame,
        },
        {
          title: "Mantas",
          img: mantas,
        },
        {
          title: "Pie de cama",
          img: pieDeCama,
        },
      ],
    },
  ],
  hogar_y_deco: [
    {
      id: 4,
      title: "Living & Deco",
      list: [
        {
          title: "Bandejas",
          img: bandejas,
        },
        {
          title: "Centros de mesa",
          img: centrosDeMesa,
        },
        {
          title: "Cerámica",
          img: ceramica,
        },
        {
          title: "Cuadros",
          img: cuadros,
        },
        {
          title: "Lámparas",
          img: lamparas,
        },
        {
          title: "Relojes",
          img: relojes,
        },
      ],
    },
  ],
  jardin: [
    {
      id: 5,
      title: "Jardín",
      list: [
        {
          title: "Macetas",
          img: macetas,
        },
        {
          title: "Porta macetas",
          img: portaMacetas,
        },
      ],
    },
  ],
  contenedores: [
    {
      id: 6,
      title: "Contenedores",
      list: [
        {
          title: "Contenedores de vidrio",
          img: contenedoresDeVidrio,
        },
        {
          title: "Dispenser",
          img: dispenser2,
        },
        {
          title: "Envases de cocina",
          img: envasesDeCocina,
        },
      ],
    },
  ],
};
