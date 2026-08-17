const base = import.meta.env.BASE_URL;

/**
 * Prefija una ruta interna con el `base` del sitio.
 * Así el portfolio funciona igual en la raíz de un dominio propio
 * que en un subdirectorio (por ejemplo GitHub Pages: /Portafolio/).
 */
export const url = (path: string): string =>
  `${base}/${path.replace(/^\//, "")}`.replace(/\/{2,}/g, "/").replace(":/", "://");
