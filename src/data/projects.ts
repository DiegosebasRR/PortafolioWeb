export interface Project {
  id: number;
  title: string;
  src: string;
  description: string[];
  technologies: string[];
  date?: string;
  links: Links[];
  images: string[];
}

interface Links {
  name: string;
  url: string;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "Marvel Hero Hub",
    description: [
      "Mi proyecto de búsqueda de héroes de Marvel es una experiencia interactiva que combina la emoción del universo Marvel con tecnologías modernas💥🦸",
      " Utilizando React y Zustand para el estado global, he desarrollado un buscador de héroes que te permite explorar a tus personajes favoritos de Marvel. Lo especial de este proyecto es que puedes guardar tus héroes preferidos en el LocalStorage",
      "Además, la navegación entre las diferentes secciones del proyecto es suave y eficiente gracias a React Router DOM. ¡Aventúrate en el emocionante mundo de Marvel y encuentra a tus héroes favoritos con facilidad en esta experiencia web! ",
    ],
    src: "/img/marvelherohub2.png",
    technologies: ["javascript", "react", "css"],
    date: "20 - 09 - 2023",
    links: [
      { name: "GitHub", url: "https://github.com" },
      { name: "Web site", url: "google.com" },
    ],
    images: ["/img/marvelherohub1.png", "/img/marvelherohub2.png"],
  },
  {
    id: 1,
    title: "To-Do",
    description: [
      "Mi aplicación de gestión de tareas es una herramienta eficiente y práctica para gestionar tus actividades diarias📋✅",
      " Desarrollada con React y TypeScript, ofrece una experiencia de usuario sólida y accesible. El estado de la aplicación se gestiona de manera efectiva con Zustand, lo que garantiza un rendimiento óptimo y una interacción suave.",
      "Además, gracias a la integración con LocalStorage, tus tareas se mantienen incluso después de cerrar la aplicación. Simplifica tu vida y mantén un registro organizado de tus tareas pendientes con esta aplicación.",
    ],
    src: "/img/todo_light.png",
    technologies: ["typescript", "react", "css"],
    date: "20 - 09 - 2023",
    links: [
      { name: "GitHub", url: "https://github.com" },
      { name: "Web site", url: "google.com" },
    ],
    images: ["/img/todo_light.png", "/img/todo_dark.png"],
  },
  {
    id: 2,
    title: "Portafolio",
    description: [
      "Mi portafolio personal, impulsado por Astro, combina rendimiento y experiencia interactiva.🚀🌐",
      "Creado utilizando la tecnología Astro, este proyecto ofrece lo mejor de ambos mundos: el rendimiento excepcional de un sitio estático y la interactividad de una aplicación web dinámica. Aquí, presento una selección cuidadosamente curada de mis proyectos y logros en el campo del desarrollo web.",
      "Lo que hace que esta experiencia sea aún más especial es la incorporación de view transition, lo que permite transiciones suaves y animadas entre diferentes vistas o secciones de la página web. Esto simula la fluidez de una Single Page Application (SPA) sin sacrificar la accesibilidad y la navegación tradicional entre páginas.",
    ],
    src: "/img/portagolio1.png",
    technologies: ["typescript", "astro", "css"],
    date: "20 - 09 - 2023",
    links: [
      { name: "GitHub", url: "https://github.com" },
      { name: "Web site", url: "google.com" },
    ],
    images: ["/img/portagolio1.png", "/img/portagolio2.png"],
  },
  {
    id: 3,
    title: "Portafolio",
    description: [
      "Mi portafolio personal, impulsado por Astro, combina rendimiento y experiencia interactiva.🚀🌐",
      "Creado utilizando la tecnología Astro, este proyecto ofrece lo mejor de ambos mundos: el rendimiento excepcional de un sitio estático y la interactividad de una aplicación web dinámica. Aquí, presento una selección cuidadosamente curada de mis proyectos y logros en el campo del desarrollo web.",
      "Lo que hace que esta experiencia sea aún más especial es la incorporación de view transition, lo que permite transiciones suaves y animadas entre diferentes vistas o secciones de la página web. Esto simula la fluidez de una Single Page Application (SPA) sin sacrificar la accesibilidad y la navegación tradicional entre páginas.",
    ],
    src: "/img/portagolio1.png",
    technologies: ["typescript", "astro", "css"],
    date: "20 - 09 - 2023",
    links: [
      { name: "GitHub", url: "https://github.com" },
      { name: "Web site", url: "google.com" },
    ],
    images: ["/img/portagolio1.png", "/img/portagolio2.png"],
  },
  {
    id: 4,
    title: "Portafolio",
    description: [
      "Mi portafolio personal, impulsado por Astro, combina rendimiento y experiencia interactiva.🚀🌐",
      "Creado utilizando la tecnología Astro, este proyecto ofrece lo mejor de ambos mundos: el rendimiento excepcional de un sitio estático y la interactividad de una aplicación web dinámica. Aquí, presento una selección cuidadosamente curada de mis proyectos y logros en el campo del desarrollo web.",
      "Lo que hace que esta experiencia sea aún más especial es la incorporación de view transition, lo que permite transiciones suaves y animadas entre diferentes vistas o secciones de la página web. Esto simula la fluidez de una Single Page Application (SPA) sin sacrificar la accesibilidad y la navegación tradicional entre páginas.",
    ],
    src: "/img/portagolio1.png",
    technologies: ["typescript", "astro", "css"],
    date: "20 - 09 - 2023",
    links: [
      { name: "GitHub", url: "https://github.com" },
      { name: "Web site", url: "google.com" },
    ],
    images: ["/img/portagolio1.png", "/img/portagolio2.png"],
  },
];
