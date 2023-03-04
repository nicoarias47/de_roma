import velas from "../assets/JPG/subCategorias/aromatizantes/velas.jpg";
import difusores from "../assets/JPG/subCategorias/aromatizantes/difusores.jpg";
import cruceDeBañeras from "../assets/JPG/subCategorias/baño/cruce_de_bañera.jpg";
import dispenser from "../assets/JPG/subCategorias/baño/cruce_de_bañera.jpg";
import jaboneras from "../assets/JPG/subCategorias/baño/jaboneras.jpg";
import portaCepillos from "../assets/JPG/subCategorias/baño/porta_cepillos.jpg";
import alfombras from "../assets/JPG/subCategorias/textiles/alfombras.jpg";
import macrame from "../assets/JPG/subCategorias/textiles/macrame.jpg";
import mantas from  "../assets/JPG/subCategorias/textiles/mantas.jpg";
import pieDeCama from "../assets/JPG/subCategorias/textiles/pie_de_cama.jpg";
import bandejas from "../assets/JPG/subCategorias/living_y_deco/bandejas.jpg";
import centrosDeMesa from "../assets/JPG/subCategorias/living_y_deco/centros_de_mesa.jpg";
import ceramica from "../assets/JPG/subCategorias/living_y_deco/ceramica.jpg";
import cuadros from "../assets/JPG/subCategorias/living_y_deco/cuadros.jpg";
import lamparas from "../assets/JPG/subCategorias/living_y_deco/lamparas.jpg";
import relojes from "../assets/JPG/subCategorias/living_y_deco/relojes.jpeg";
import macetas from "../assets/JPG/subCategorias/jardin/macetas.jpg";
import portaMacetas from "../assets/JPG/subCategorias/jardin/porta_macetero.jpg";
import contenedoresDeVidrio from "../assets/JPG/subCategorias/contenedores/contenedores_vidrio.jpg";
import dispenser2 from "../assets/JPG/subCategorias/contenedores/dispenser.jpg";
import envasesDeCocina from  "../assets/JPG/subCategorias/contenedores/envases_cocina.jpg";

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
  textiles: [
    {
      id: 3,
      title: "Textiles",
      list: [
        {
          title: "Alfombras",
          img: alfombras,
        },
        {
          title: "Macrame",
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
          title: "Ceramica",
          img: ceramica,
        },
        {
          title: "Cuadros",
          img: cuadros,
        },
        {
          title: "Lamparas",
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
      title: "Jardin",
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
          title: "dispenser",
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
