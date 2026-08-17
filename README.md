# Portfolio · Valentín Carballo

Sitio personal y comercial para presentar mi trabajo a clientes y empresas: servicios,
casos de proyectos reales, stack, experiencia y contacto.

**Stack:** [Astro](https://astro.build) (HTML estático, sin JavaScript de framework en el cliente),
Tailwind CSS v4 y tipografías auto-hospedadas. El resultado es un sitio estático que se puede
publicar en cualquier hosting.

---

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ para revisar el build final
```

Requiere Node 22 o superior.

---

## Dónde se edita el contenido

Todo el texto vive en dos archivos. No hace falta tocar componentes para actualizar el sitio.

| Archivo | Qué contiene |
| --- | --- |
| `src/data/site.ts` | Nombre, rol, email, links, ubicación, CV, disponibilidad, menú y las 4 métricas del inicio. |
| `src/data/projects.ts` | Los proyectos: título, resumen, métricas, stack, el caso completo (problema / enfoque / features / resultado). |

Secciones con texto propio dentro del componente:

- `src/components/Services.astro` — los 6 servicios.
- `src/components/Process.astro` — los 4 pasos de trabajo.
- `src/components/Stack.astro` — las tecnologías agrupadas.
- `src/components/Experience.astro` — la experiencia laboral.
- `src/components/About.astro` — el texto de "Sobre mí".
- `src/components/Faq.astro` — las preguntas frecuentes.

### Agregar un proyecto

Sumá un objeto al array de `src/data/projects.ts`. Se genera solo:

- la fila en la sección **Proyectos** del inicio,
- la página del caso en `/proyectos/<slug>/`,
- la entrada en el sitemap.

### Reemplazar los mockups por capturas reales

Cada proyecto se ilustra con un mockup dibujado en SVG (`src/components/mockups/`). Para usar una
captura real, guardá la imagen en `public/assets/proyectos/` y agregá el campo `screenshot` al
proyecto:

```ts
screenshot: "/assets/proyectos/gestion-club.png",
```

Ideal: 1280×800 px, formato WebP o PNG.

### Imagen para redes (Open Graph)

`public/og.png` (1200×630) es la imagen que se ve al compartir el link en WhatsApp, LinkedIn o X.
Si cambiás el título principal, conviene regenerarla.

---

## Publicar

El sitio es 100% estático: lo que hay que subir es la carpeta `dist/`.

### Netlify (recomendado)

Ya está configurado en `netlify.toml`. Conectás el repo y Netlify hace `npm run build` y publica
`dist/`. Cambiá `SITE_URL` en ese archivo por el dominio final.

### GitHub Pages

El workflow `.github/workflows/deploy-pages.yml` construye y publica en cada push a `main`.
Hay que activarlo una vez: **Settings → Pages → Source: GitHub Actions**.

- Si el sitio queda en `https://usuario.github.io/Portafolio/`, dejá el workflow como está.
- Si usás un dominio propio o `usuario.github.io`, borrá la línea `BASE_PATH` del workflow.

### Cualquier otro hosting

`npm run build` y subís `dist/`. Si lo servís desde un subdirectorio, construí con
`BASE_PATH=/subdirectorio npm run build`.

---

## Detalles técnicos

- **Cero JS de framework.** Sólo dos scripts propios: el menú móvil y la animación de aparición.
- **Accesibilidad:** navegación por teclado, `skip link`, foco visible, landmarks semánticos y
  respeto por `prefers-reduced-motion`.
- **SEO:** canonical, Open Graph, Twitter Card, JSON-LD (`Person`), `sitemap-index.xml` y `robots.txt`.
- **Tema oscuro** definido con variables CSS en `src/styles/global.css`; el acento de marca sale de
  los tokens `--color-brand-*`.
