export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  /** Clave del mockup SVG que se dibuja en la card (ver src/components/mockups). */
  mockup: "reservas" | "prode" | "crm";
  /** Captura real opcional en /public (ej: "/assets/proyectos/gestion-club.png").
   *  Si la definís, reemplaza al mockup ilustrativo. */
  screenshot?: string;
  url: string;
  type: string;
  year: string;
  role: string;
  accent: string;
  metrics: { value: string; label: string }[];
  /** El stack está armado según mi experiencia; ajustalo si un proyecto cambió. */
  stack: string[];
  challenge: string;
  approach: string;
  features: { title: string; description: string }[];
  outcome: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "gestion-club",
    name: "Gestión Club",
    tagline: "Reservas, pagos y torneos para clubes deportivos",
    summary:
      "Plataforma para que un club administre sus canchas de punta a punta: el socio reserva y paga online, y el club ve en un panel los turnos del día, la ocupación y lo recaudado.",
    mockup: "reservas",
    url: "http://gestionclub.valbsolutions.site/",
    type: "Producto propio · Demo comercial",
    year: "2025",
    role: "Producto, backend, frontend y base de datos",
    accent: "#38d6ee",
    metrics: [
      { value: "24/7", label: "Reservas sin depender del teléfono" },
      { value: "1 panel", label: "Turnos, ocupación y recaudación" },
      { value: "Torneos", label: "Inscripción y seguimiento incluidos" },
    ],
    stack: [".NET", "C#", "SQL Server", "JavaScript", "Bootstrap"],
    challenge:
      "La mayoría de los clubes todavía maneja los turnos por WhatsApp y planillas. El resultado es siempre el mismo: turnos superpuestos, canchas libres que nadie ve, cobros que se anotan en un cuaderno y cero visibilidad de cuánto entra por mes.",
    approach:
      "Armé una plataforma con dos caras. Del lado del jugador, una grilla de canchas por franja horaria donde reservar y pagar toma menos de un minuto. Del lado del club, un panel administrativo donde cada reserva impacta al instante y la recaudación se ve sin abrir una planilla.",
    features: [
      {
        title: "Grilla de reservas por cancha y horario",
        description:
          "Disponibilidad en tiempo real, con bloqueo del turno al confirmar para evitar dobles reservas.",
      },
      {
        title: "Pago de la reserva online",
        description:
          "El turno queda confirmado con el pago, lo que reduce los ausentes y ordena la caja del club.",
      },
      {
        title: "Gestión de torneos",
        description:
          "Alta de torneos, inscripción de participantes y seguimiento del avance desde el mismo sistema.",
      },
      {
        title: "Panel del club",
        description:
          "Reservas del día, ocupación por cancha y total recaudado, separado de la vista del jugador.",
      },
    ],
    outcome:
      "El club deja de administrar turnos por mensajes y pasa a tener una sola fuente de verdad: qué cancha está ocupada, quién reservó, quién pagó y cuánto entró.",
    featured: true,
  },
  {
    slug: "quiniprode",
    name: "QuiniProde",
    tagline: "Prode del Mundial 2026 con más de 80 participantes",
    summary:
      "Aplicación web para jugar el prode entre amigos, familia u oficina: cada uno carga sus pronósticos, se arman grupos privados por invitación y las tablas de posiciones se calculan solas.",
    mockup: "prode",
    url: "https://quiniprode.netlify.app/",
    type: "Producto propio · En producción",
    year: "2026",
    role: "Producto, frontend, backend y despliegue",
    accent: "#a78bfa",
    metrics: [
      { value: "+80", label: "Participantes activos" },
      { value: "0", label: "Puntajes calculados a mano" },
      { value: "Mobile", label: "Pensada para usarse desde el celular" },
    ],
    stack: ["React", "JavaScript", "API REST", "Netlify"],
    challenge:
      "El prode entre conocidos siempre termina igual: una planilla compartida, alguien que suma los puntos a mano y discusiones sobre quién cargó qué antes de que empezara el partido.",
    approach:
      "Llevé todo a una app: pronósticos con cierre por partido, grupos privados que se crean e invitan con un link, y puntajes que se recalculan automáticamente apenas se carga un resultado. El foco fue el uso desde el celular, que es donde la gente realmente juega.",
    features: [
      {
        title: "Pronósticos por partido",
        description:
          "Carga simple de resultados esperados, con cierre antes del inicio de cada encuentro.",
      },
      {
        title: "Grupos privados e invitaciones",
        description:
          "Cualquiera crea su grupo y suma gente con un link, sin coordinación manual.",
      },
      {
        title: "Tabla de posiciones automática",
        description:
          "El puntaje se actualiza solo cuando entra un resultado, general y por grupo.",
      },
      {
        title: "Escala sin fricción",
        description:
          "Más de 80 participantes jugando en paralelo sin trabajo administrativo detrás.",
      },
    ],
    outcome:
      "Un producto real, con usuarios reales y uso concurrente: la mejor prueba de que el desarrollo aguanta gente de verdad y no sólo una demo.",
    featured: true,
  },
  {
    slug: "valb-solutions",
    name: "Valb Solutions",
    tagline: "Sitio comercial + backoffice de clientes estilo CRM",
    summary:
      "La marca desde la que ofrezco soluciones de software, con un panel interno para administrar clientes: alta, seguimiento del estado de cada cuenta y de las consultas que entran por el sitio.",
    mockup: "crm",
    url: "https://valbsolutions.site/",
    type: "Marca propia · Plataforma interna",
    year: "2025",
    role: "Diseño, desarrollo y operación",
    accent: "#4a7cff",
    metrics: [
      { value: "1", label: "Lugar para todos los clientes" },
      { value: "Web → CRM", label: "La consulta entra y queda registrada" },
      { value: "Seguimiento", label: "Estado de cada cuenta a la vista" },
    ],
    stack: [".NET", "C#", "SQL Server", "JavaScript"],
    challenge:
      "Ofrecer servicios de software y llevar el seguimiento comercial en notas sueltas no escala: se pierden consultas, no queda registro de en qué quedó cada conversación y no hay forma de ver el estado real de la cartera.",
    approach:
      "Construí el sitio comercial y, detrás, un backoffice de gestión de clientes. Lo que entra por el formulario del sitio queda registrado en el panel, y desde ahí se administra cada cuenta y su estado, sin salir del sistema.",
    features: [
      {
        title: "Presentación de servicios",
        description:
          "Sitio público que explica las soluciones y convierte visitas en consultas concretas.",
      },
      {
        title: "Administración de clientes",
        description:
          "Alta y edición de cuentas con la información comercial centralizada.",
      },
      {
        title: "Seguimiento de estados",
        description:
          "Cada cliente avanza por estados, así siempre se sabe en qué quedó cada caso.",
      },
      {
        title: "Base para crecer",
        description:
          "Modelo de datos pensado para sumar módulos sin rehacer el sistema.",
      },
    ],
    outcome:
      "Es el mismo enfoque que aplico con clientes: primero ordenar el proceso, después automatizar lo que se repite.",
    featured: true,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
