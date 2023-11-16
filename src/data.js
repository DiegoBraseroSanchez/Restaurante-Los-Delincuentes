// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from "react-icons/fa";
// import images
import AboutImg from "../src/assets/img/about/plate.png";
import ModelWhiteImg from "../src/assets/img/model-white.png";
import ModelBlackImg from "../src/assets/img/model-black.png";
import MenuImg1 from "../src/assets/img/menu/1.png";
import MenuImg2 from "../src/assets/img/menu/2.png";
import MenuImg3 from "../src/assets/img/menu/3.png";
import MenuImg4 from "../src/assets/img/menu/4.png";
import SignatureImg from "../src/assets/img/team/signature.png";
import ChefImg from "../src/assets/img/team/chef.png";
import Avatar1 from "../src/assets/img/testimonial/avatar1.png";
import Avatar2 from "../src/assets/img/testimonial/avatar2.png";
import Avatar3 from "../src/assets/img/testimonial/avatar3.png";
import Avatar4 from "../src/assets/img/testimonial/avatar4.png";
import Avatar5 from "../src/assets/img/testimonial/avatar5.png";
import Avatar6 from "../src/assets/img/testimonial/avatar6.png";
import Avatar7 from "../src/assets/img/testimonial/avatar7.png";
import Avatar8 from "../src/assets/img/testimonial/avatar8.png";
import Avatar9 from "../src/assets/img/testimonial/avatar9.png";
import Avatar10 from "../src/assets/img/testimonial/avatar10.png";

export const navData = [
  { href: "/", name: "home" },
  { href: "/", name: "about" },
  { href: "/", name: "menu" },
  { href: "/", name: "team" },
  { href: "/", name: "testimonials" },
  { href: "/", name: "book a table" },
  { href: "/", name: "contact" },
];

export const heroData = {
  pretitle: "Una Pasión que se Contagia",
  title: "¡Los Delicuentes!",
  subtitle:
    "Cada familia tiene una historia, BIENVENIDOS a la nuestra. Cuidamos tu comida, cuidamos de ti. ",
  btnText: "Saber mas",
};

export const socialData = [
  { href: "/", icon: <FaYoutube /> },
  { href: "/", icon: <FaFacebookF /> },
  { href: "/", icon: <FaInstagram /> },
  { href: "/", icon: <FaPinterestP /> },
  { href: "/", icon: <FaDiscord /> },
];

export const aboutData = {
  pretitle: "Nuestra Historia",
  title: "¿Quienes Somos?",
  subtitle:
    "Somos un grupo de amigos de la infancia que siempre nos gustaba salir a cenar todos juntos. Pero siempre teniamos problemas al elegir el lugar..Asi que un dia decidimos montar nuestro propio restaurante y juntar en un mismo lugar todos nuestos gustos.",
  btnText: "Saber Mas",
  image: AboutImg,
};

export const menuData = {
  title: "Delicioso Sabor Del Invierno",
  subtitle: "ver todo el menú para comer",
  modelImg: ModelWhiteImg,
  btnText: "Mirar Menu Completo",
  menuItems: [
    {
      image: MenuImg1,
      name: "Tarta de Queso",
      price: "8€",
      description: "Pocos postres necesitan tan poca presentación como la tarta de queso",
    },
    {
      image: MenuImg2,
      name: "Hamburguesa Vegana",
      price: "10€",
      description: "Hamburguesa vegetal+vegan pulled ribs, queso vegano",
    },
    {
      image: MenuImg3,
      name: "Hamburguesa Doble",
      price: "11€",
      description: "Doble carne doble de sabor, bacon crujiente, cebolla crunchy ",
    },
    {
      image: MenuImg4,
      name: "Hamburguesa Mexicana",
      price: "12€",
      description: "Guacamole casero, fresco y rústico, acompañado con salsa ",
    },
  ],
};

export const teamData = {
  pretitle: "Nuestro Equipo",
  title: "conoce a nuestro chef",
  sub1: "Soy Diego Braserini, experto en la grastronomia morderna y contemporanea. Cuento con más de 20 años de experiencia a mis espaldas o mejor dicho en mi sarten..jeje.",
  sub2: "Mi historia comenzo en mi casa, donde realice el plato que me lanzo a la fama mundial siendo uno de los cocineros con mas estrellas Michelin del Mundo. ¡El vasito de leche con Nesquik! Esa fue mi gran obra de arte, el resto..ya es historia.",
  name: "diego braserini",
  occupation: "Direttore esecutivo",
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "Opiniones de nuestros clientes",
  subtitle: "+1500 clientes satisfechos",
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        "Lo que uno busca en esta vida es la tranquilidad.. y en este restaurante te la dan. Para mi su plato estrella es el buen chuleton, ademas conozco al cocinero y me deja poner los toros mientras como jeje",
      image: Avatar1,
      name: "Jose Luis Escolano",
      occupation: "Abogado en Garrigues",
    },
    {
      message:
        "Como buena puebleria que soy valoro la buena comida y aqui se come estunpedamente, lo que mas me gusto fueron sus guisitos y su alta variedad de platos hace que sea dificil que pedir. La proxima vez vendre con mi novio aunque nunca me haga caso..",
      image: Avatar2,
      name: "Maria Parra",
      occupation: "Psicóloga en PsicoAbreu",
    },
    {
      message:
        "El ¡Delincuentes! es el mejor restaurante de Madrid, me encanta venir con mis amigos y Javichu. Lo que mas me gustan son los huevos rotos y los fingers de pollo. Typical in Getafe",
      image: Avatar3,
      name: "Sara Garrido",
      occupation: "Psicóloga en Upad Psicología Y Coaching ",
    },
    {
      message:
        "Me encatan el ambiente de este restaurentee 100% recomendado.Su alta variedad en zumos es una locuraa y por no hablar de sus nuggets. Si us plau obrir un restaurant a Reus",
      image: Avatar4,
      name: "Paula Herrerías",
      occupation: "Directora de Marketing en ¡Delincuentes!",
    },
    {
      message:
        "Por fin he podido estrenar mis Balenciaga en un sitio que esta a mi mismo nivel, lo unico malo que no ponen cachimbas..por lo demas es una locura. El parking cuenta con servicio de carga de coches electricos ¡Perfecto para mi Tesla!",
      image: Avatar5,
      name: "Oscar Davila",
      occupation: "HRBP & Talent Acquisition Specialist",
    },
    {
      message:
        "Mira que he estado en muchos paieses difentes y nunca vi un restaurante tan bueno en ninguno de ellos. Lo unico raro fue cuando el camarero me grito al pedir una coca-cola",
      image: Avatar6,
      name: "Natalia Garcia",
      occupation: "Maestra y Directora del Colegio Julio Cortázar",
    },
    {
      message:
        "Como influencer que soy solo frecuento lugares de alto estandin y este es uno de ellos, me encata la decoracion de este lugar ¡Me pienso sacar 240 fotos!",
      image: Avatar7,
      name: "Nabil Boutalib",
      occupation: "Tenico de Laboratorio Clínico y Bimédico",
    },
    {
      message:
        "Este restaurante es mi lugar de confiaza, siento que puedo comer cualquier cosa sin morirme de alergia. Asi que gracias por evitar el paseo al hospital.",
      image: Avatar8,
      name: "Maria Gonzalez",
      occupation: "Jefa suprema y gobernante de Getafe",
    },
    {
      message:
        "Tras volver de una mision no hay nada que me apetezca más que ir al ¡Delicuentes! y comerme unos buenos Ignacios. Conoci este restaurante gracias a un video de Pepe Chuleton. ¡MAMAAA ESTA DE LOCOS!",
      image: Avatar9,
      name: "Nacho Garcia",
      occupation: "Capitán General del Ejercito de Tierra",
    },
    {
      message:
        "Mi alma esto esta de muerte illo,ojala abrieran uno en Sevilla para ir con mi churumbel",
      image: Avatar10,
      name: "Maria Moreno",
      occupation: "Psicóloga en Cecops ",
    },
  ],
};

export const reservationData = {
  title: "Formulario de reserva",
  subtitle:
    "Reserva ya y disfruta de nuestras delicias",
  modelImg: ModelBlackImg,
  btnText: "Confirmar Reserva",
};

export const newsletterData = {
  title: "Suscríbete",
  subtitle: "Recibe las últimas noticias y actualizaciones en tu bandeja de entrada.",
  placeholder: "Suscríbete a nuestros platos.",
  btnText: "Suscribirse ahora",
};

export const footerData = {
  contact: {
    title: "ubicación de contacto",
    address: "Codigo postal 28905, #SEC3 Getafe, MA  28004",
    phone: "(201)256-3689",
  },
  hours: {
    title: "working hours",
    program: [
      {
        days: "Lunes - Viernes",
        hours: "09:00 AM - 10:00 PM",
      },
      {
        days: "Sabados - Domingos",
        hours: "09:00 AM - 11:00 PM",
      },
    ],
  },
  social: {
    title: "Redes Sociales",
    icons: [
      { href: "/", icon: <FaYoutube /> },
      { href: "/", icon: <FaFacebookF /> },
      { href: "/", icon: <FaInstagram /> },
      { href: "/", icon: <FaPinterestP /> },
      { href: "/", icon: <FaDiscord /> },
    ],
  },
};
