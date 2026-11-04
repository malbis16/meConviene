# MeConviene — Landing Page

Landing page de **MeConviene**, una app móvil comparadora de precios que centraliza precios, promociones y ofertas de productos y servicios online en Bolivia y la región.

> "Tus mejores opciones, en un solo lugar"

## Secciones

| Sección | Ancla | Componente |
| --- | --- | --- |
| Hero (logo, eslogan, beneficios y estadísticas) | — | `components/hero-section.tsx` |
| Sobre Nosotros (misión, visión y valores) | `#sobre-nosotros` | `components/about-section.tsx` |
| Objetivos | `#objetivos` | `components/objectives-section.tsx` |
| Business Model Canvas | `#canvas` | `components/business-canvas-section.tsx` |
| Contacto (datos y formulario) | `#contacto` | `components/contact-section.tsx` |

La cabecera (`components/header.tsx`) y el pie de página (`components/footer.tsx`) enlazan a estas anclas.

## Tecnologías

- [Next.js 14](https://nextjs.org/) (App Router) + React 18
- TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/) con animaciones propias (`app/globals.css`)
- Componentes [shadcn/ui](https://ui.shadcn.com/) (Radix UI) en `components/ui`
- Iconos [lucide-react](https://lucide.dev/) y fuente Geist
- Vercel Analytics

## Paleta de colores

Definida como variables CSS en `app/globals.css`:

| Token | Color | Uso |
| --- | --- | --- |
| `--primary` | `#5d5491` | Morado principal, textos y botones |
| `--secondary` | `#9a8bcb` | Morado claro |
| `--accent` | `#145da0` | Azul de acento |
| `--muted` | `#b1c3cb` | Gris azulado de fondos |
| `--background` | `#ffffff` | Fondo |

## Requisitos

- Node.js 18.17 o superior
- npm (o pnpm)

## Cómo ejecutar

```bash
# instalar dependencias
npm install

# servidor de desarrollo en http://localhost:3000
npm run dev

# compilación de producción
npm run build
npm run start
```

## Estructura

```
app/            layout, página principal y estilos globales
components/     secciones de la landing
components/ui/  componentes base de shadcn/ui
hooks/          hooks (animaciones al hacer scroll, etc.)
lib/            utilidades
public/         logo e íconos
```

## Notas

- El formulario de contacto abre el cliente de correo del usuario (`mailto:contacto@meconviene.app`); no hay backend.
- La imagen del Business Model Canvas se carga desde Vercel Blob Storage.
- Los botones "Descargar App", "Ver Demo", "Solicitar Demo" y "Contactar Ventas", y varios enlaces del pie de página, aún no tienen destino.
