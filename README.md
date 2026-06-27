# Padel Manager

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

Aplicación de página única para gestionar un equipo de pádel. Muestra el clima, el estado del juego, la plantilla de jugadores y el calendario de partidos.

## Características

- **Clima y estado del juego** — Obtiene el tiempo en tiempo real desde la API de Open-Meteo y calcula el comportamiento de la pelota (baja / normal / alta vivacidad).
- **Plantilla de jugadores** — Consulta la plantilla completa con historial de partidos y estado de bloqueo para playoff.
- **Calendario de partidos** — Próximos encuentros y resultados anteriores (victoria / derrota / empate).
- **Diseño responsive** — Optimizado para escritorio, tablet, móvil y pantallas ultra anchas (a partir de 2560px).

## Captura

<!-- TODO: Añadir una captura del panel principal -->

## Tecnologías

- **HTML5** — Marcado semántico
- **CSS3** — CSS Grid, Flexbox, propiedades personalizadas, media queries responsive
- **Vanilla JavaScript** — Módulos ES, sin frameworks
- **Open-Meteo API** — Datos meteorológicos gratuitos, sin necesidad de clave API
- **Font Awesome** — Iconos
- **Google Fonts** — Roboto & Permanent Marker

## Estructura del proyecto

```
PadelTeamViewer/
├── index.html              # Punto de entrada
├── LICENSE                 # Apache 2.0
├── README.md
├── .gitignore
└── src/
    ├── css/
    │   └── style.css       # Todos los estilos
    ├── data/
    │   ├── calendarData.js # Calendario de partidos
    │   └── playerData.js   # Plantilla de jugadores
    └── js/
        ├── index.js        # Entrada y enrutado
        ├── fetchEvents.js  # Lógica de listado de eventos
        ├── weatherConditions.js  # Clima y estado del juego
        └── views/
            ├── home.js     # Plantilla de inicio
            ├── players.js  # Vista de jugadores
            └── calendar.js # Vista de calendario
```

## Primeros pasos

### Requisitos

Un navegador web moderno (Chrome, Firefox, Safari, Edge). No hacen falta herramientas de compilación ni servidores — funciona directamente desde el sistema de archivos.

### Instalación

```bash
git clone https://github.com/nachovaz/Padel_Team_Viewer.git
cd PadelTeamViewer
```

A continuación abre `index.html` en tu navegador.

### Desarrollo local

Para una experiencia óptima, sirve el proyecto con un servidor HTTP local (necesario para que los módulos ES funcionen con `fetch`):

```bash
# Con Python
python -m http.server -d /ruta/hacia/PadelTeamViewer

# Con la extensión Live Server de VS Code
```

## Personalización

### Cambiar el equipo

Edita el nombre del equipo en `index.html`:

```html
<span class="header-team-name">Padel Oviedo B</span>
```

### Colores

Todos los colores están definidos como propiedades personalizadas de CSS en `src/css/style.css`:

```css
:root {
    --primary-color: #2ea043;
    --background-dark: #1c1c1c;
    --text-light: #ffffff;
    --text-semi-light: #e0e0e0;
    --radius-card: 25px;
}
```

### Datos de jugadores

Sustituye el array en `src/data/playerData.js` con tu propia plantilla.

### Calendario

Sustituye el array en `src/data/calendarData.js` con tu calendario de partidos. Cada entrada necesita: `fecha`, `hora`, `lugar`, `vs`, `resultado`.

## Fuentes de datos

- **Open-Meteo API** ([open-meteo.com](https://open-meteo.com/)) proporciona datos meteorológicos gratuitos. La petición está configurada para Oviedo (43.36, -5.85). Cambia las coordenadas en `src/js/weatherConditions.js` para otra ubicación.
- **Los datos de jugadores y calendario** son módulos ES estáticos en `src/data/`. Se importan directamente — no hace falta backend.

## Licencia

Apache 2.0 — consulta el fichero [LICENSE](LICENSE).

---

# Padel Manager

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

Single-page application for managing a padel team. Displays weather conditions, ball liveliness, player roster, and match schedule.

## Features

- **Weather & ball liveliness** — Fetches real-time weather from Open-Meteo API and calculates ball behaviour (low / normal / high liveliness).
- **Player roster** — View the full squad with match history and playoff lock status.
- **Match calendar** — Upcoming and past events with results (win / loss / tie).
- **Responsive design** — Optimised for desktop, tablet, mobile, and ultrawide screens (2560px+).

## Screenshot

<!-- TODO: Add a screenshot of the dashboard -->

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — CSS Grid, Flexbox, custom properties, responsive media queries
- **Vanilla JavaScript** — ES modules, no framework
- **Open-Meteo API** — Free weather data, no API key required
- **Font Awesome** — Icons
- **Google Fonts** — Roboto & Permanent Marker

## Project Structure

```
PadelTeamViewer/
├── index.html              # Entry point
├── LICENSE                 # Apache 2.0
├── README.md
├── .gitignore
└── src/
    ├── css/
    │   └── style.css       # All styles
    ├── data/
    │   ├── calendarData.js # Match schedule
    │   └── playerData.js   # Player roster
    └── js/
        ├── index.js        # App entry & routing
        ├── fetchEvents.js  # Event list logic
        ├── weatherConditions.js  # Weather & ball liveliness
        └── views/
            ├── home.js     # Home view template
            ├── players.js  # Players view
            └── calendar.js # Calendar view
```

## Getting Started

### Requirements

A modern web browser (Chrome, Firefox, Safari, Edge). No build tools or servers needed — it runs directly from the file system.

### Installation

```bash
git clone https://github.com/nachovaz/Padel_Team_Viewer.git
cd PadelTeamViewer
```

Then open `index.html` in your browser.

### Local development

For the best experience, serve the project with a local HTTP server (needed for ES modules to work with `fetch`):

```bash
# Using Python
python -m http.server -d /path/to/PadelTeamViewer

# Using VS Code Live Server extension
```

## Customization

### Changing the team

Edit the team name in `index.html`:

```html
<span class="header-team-name">Padel Oviedo B</span>
```

### Colors

All colours are defined as CSS custom properties in `src/css/style.css`:

```css
:root {
    --primary-color: #2ea043;
    --background-dark: #1c1c1c;
    --text-light: #ffffff;
    --text-semi-light: #e0e0e0;
    --radius-card: 25px;
}
```

### Player data

Replace the array in `src/data/playerData.js` with your own roster.

### Calendar

Replace the array in `src/data/calendarData.js` with your match schedule. Each entry needs: `fecha`, `hora`, `lugar`, `vs`, `resultado`.

## Data Sources

- **Open-Meteo API** ([open-meteo.com](https://open-meteo.com/)) provides free weather data. The request is hardcoded for Oviedo (43.36, -5.85). Change the coordinates in `src/js/weatherConditions.js` for a different location.
- **Player and calendar data** are static ES modules under `src/data/`. They are imported directly — no backend required.

## License

Apache 2.0 — see [LICENSE](LICENSE).
