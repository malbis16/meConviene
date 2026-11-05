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

La cabecera (`components/header.tsx`) y el pie de página (`components/footer.tsx`) enlazan a estas anclas. En móvil, la navegación se abre desde el botón ☰ en un panel lateral (`components/mobile-nav.tsx`).

El diseño es responsive y está verificado sin desbordes horizontales en anchos de 320, 375 y 414 px.

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

### Modo oscuro

La página tiene modo claro y oscuro ([next-themes](https://github.com/pacocoursey/next-themes)). Por defecto sigue la preferencia del sistema operativo del usuario; el botón sol/luna de la cabecera (`components/theme-toggle.tsx`) permite cambiarlo, y la elección se recuerda en el navegador (`localStorage`).

El modo oscuro reutiliza la misma paleta (bloque `.dark` en `app/globals.css`), reasignada para que los textos sean legibles sobre fondo oscuro:

| Token | Color | Uso |
| --- | --- | --- |
| `--background` | `#192064` | Fondo azul oscuro |
| `--card` | `#23286b` | Tarjetas (azul oscuro con 15 % del morado principal) |
| `--primary` | `#9a8bcb` | Morado claro |
| `--secondary` | `#b1c3cb` | Gris azulado |
| `--accent` | `#729ec6` | Azul `#145da0` aclarado |
| `--muted` | `#5d5491` | Morado principal en fondos |

## Requisitos

- Node.js 18.17 o superior
- [pnpm](https://pnpm.io/) 9 (el proyecto usa `pnpm-lock.yaml`)

## Cómo ejecutar

```bash
# instalar dependencias
pnpm install

# servidor de desarrollo en http://localhost:3000
pnpm dev

# compilación de producción
pnpm build
pnpm start
```

> Si no tienes pnpm instalado: `npm install -g pnpm@9` o `corepack enable`.

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. En [vercel.com/new](https://vercel.com/new) importa el repositorio. Vercel detecta Next.js y pnpm automáticamente; no hace falta cambiar ninguna configuración (Build Command `next build`, Output `.next`).
3. No se requieren variables de entorno.
4. Vercel Analytics ya está integrado (`@vercel/analytics`); para ver las métricas, actívalo en la pestaña **Analytics** del proyecto.

Si agregas o actualizas dependencias, hazlo con `pnpm` para que `pnpm-lock.yaml` quede sincronizado: Vercel instala con el lockfile congelado y falla si no coincide con `package.json`.

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

- "Ver Demo" abre el [video explicativo de la app](https://youtu.be/UN_aS85WLj0) en una pestaña nueva.
- Están desactivados temporalmente los botones "Descargar App", "Solicitar Información para Comercios", "Solicitar Demo", "Contactar Ventas" y el formulario "Envíanos un Mensaje" (campos y botón de envío, bloqueados con un `<fieldset disabled>` en `components/contact-section.tsx`). Para reactivarlos, quita el atributo `disabled`.
- El formulario, cuando se reactive, abre el cliente de correo del usuario (`mailto:contacto@meconviene.app`); no hay backend.
- El Business Model Canvas se puede ampliar (`components/zoomable-image.tsx`): al hacer clic o tocar la imagen se abre un visor a pantalla completa con zoom hasta 500 % mediante rueda del mouse, botones +/−, doble clic, pellizco o doble toque en móvil, y arrastre para moverse. También funciona con las teclas `+`, `-` y `0`.
- La imagen del Business Model Canvas se carga desde Vercel Blob Storage.
- Varios enlaces del pie de página aún no tienen destino.
