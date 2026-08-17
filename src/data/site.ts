export const site = {
  name: "Valentín Carballo",
  role: "Desarrollador de Software Full Stack",
  brand: "Valb Solutions",
  // Cambiá esto por el dominio donde publiques el portfolio.
  url: "https://valbsolutions.site",
  title: "Valentín Carballo · Desarrollador de Software a Medida",
  description:
    "Desarrollador full stack (.NET, C#, SQL Server, JavaScript). Diseño y construyo aplicaciones web a medida: reservas y pagos, gestión de clientes y automatización de procesos para empresas y clubes.",
  tagline: "Construyo software a medida que ordena la operación de tu negocio.",
  location: "Argentina · Trabajo remoto",
  available: true,
  availabilityLabel: "Disponible para nuevos proyectos",
  email: "valentincarballo99@gmail.com",
  cv: "/assets/NETDeveloperValentin.pdf",
  photo: "/assets/fotoLinkedinJPG.png",
  links: {
    github: "https://github.com/Valencarballo1",
    linkedin: "https://www.linkedin.com/in/valentin-carballo-2b9756189/",
    agency: "https://valbsolutions.site",
  },
} as const;

export const nav = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Stack", href: "/#stack" },
  { label: "Sobre mí", href: "/#sobre-mi" },
] as const;

export const stats = [
  { value: "4+", label: "años desarrollando software en producción" },
  { value: "3", label: "productos propios online y en uso" },
  { value: "+80", label: "usuarios activos en QuiniProde" },
  { value: "100%", label: "del ciclo: análisis, desarrollo y entrega" },
] as const;
