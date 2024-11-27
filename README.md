# Es un proyecto básico de Nuxt3 con nuxt UI.

## Nuxt3

El objetivo de Nuxt es hacer que el desarrollo web sea intuitivo y de alto rendimiento con una excelente experiencia para el desarrollador en mente.
Nuxt es un marco gratuito y de código abierto con una forma intuitiva y extensible de crear aplicaciones y sitios web full-stack seguros, de alto rendimiento y de nivel de producción con Vue.js.

Hicimos todo para que puedas comenzar a escribir .vuearchivos desde el principio mientras disfrutas del reemplazo de módulos en desarrollo y una aplicación de alto rendimiento en producción con renderizado del lado del servidor de forma predeterminada.

Nuxt no tiene dependencia de ningún proveedor, lo que le permite implementar su aplicación en todas partes, incluso en el borde .

# Nuevo proyecto
### Prerrequisitos
1. Node.js - o más reciente (pero recomendamos la versión LTS activa )18.x
2. Editor de texto : no hay ningún requisito de IDE, pero recomendamos Visual Studio Code con la extensión oficial Vue (anteriormente conocida como Volar) o WebStorm , que, junto con otros  IDE de JetBrains , ofrece un excelente soporte para Nuxt desde el primer momento.
3. Terminal : para ejecutar comandos Nuxt
Notas adicionales para una configuración óptima:
Abra una terminal (si usa Visual Studio Code , puede abrir una terminal integrada ) y use el siguiente comando para crear un nuevo proyecto de inicio:


 ```js
 pnpm dlx nuxi@latest init <project-name>

 cd <project-name>

```

Look at the Nuxt3 [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Nuxt UI

Nuxt UI es un módulo que proporciona un conjunto de componentes y componibles de Vue creados con Tailwind CSS y Headless UI para ayudarlo a crear interfaces de usuario hermosas y accesibles.

Su objetivo es proporcionar todo lo relacionado con la interfaz de usuario al crear una aplicación Nuxt. Esto incluye componentes, íconos, colores, modo oscuro y atajos de teclado.

## Características.

1. Creado con interfaz de usuario sin interfaz gráfica y Tailwind CSS
2. Soporte de HMR a través de Nuxt App Config
3. Compatibilidad con modo oscuro
4. Compatibilidad con idiomas LTR y RTL
5. Atajos de teclado
6. Iconos agrupados
7. Completamente mecanografiado
8. Kit de Figma


Look at the nuxt UI [Nuxt documentation](https://ui.nuxt.com/getting-started).

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
