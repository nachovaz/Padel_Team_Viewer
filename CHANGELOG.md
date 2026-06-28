# Changelog

Lista de versiones de PadelTeamViewer.

## [Unreleased]

## [v0.5.0] - 2026-06-28

### Added
- Integración con API Open-Meteo para clima y condición de salida de bola
- Vista de plantilla de jugadores con datos de licencia y playoffs
- Calendario de partidos con eventos pasados y próximos (4 próximos)
- Dashboard con paneles de clima, eventos y próximos encuentros
- Diseño responsive: mobile, tablet, desktop y ultrawide (2560px+)
- Tema oscuro completo con custom properties CSS
- Navegación por secciones con Font Awesome y enrutado vanilla
- Módulos ES para estructura del código (src/data, src/js, src/js/views)
- Footer, login page (maqueta), y menú de navegación interactivo

### Changed
- Migración de Java/Spring Boot a frontend vanilla (HTML/CSS/JS)
- Refactorización completa a estructura modular con ES modules
- Mejoras de accesibilidad con etiquetado semántico HTML
- Optimización de CSS con Grid, Flexbox, custom properties y media queries
- Sistema de layout cambiado a display: grid para el dashboard
- Visualización de eventos separada en columnas (pasados/próximos)
- Unidades de fuente migradas a clamp() y rem para mejor responsive

### Fixed
- Ajustes de layout para vista móvil y ultrawide
- Correcciones en visualización de datos meteorológicos
- Mejoras en la distribución de tarjetas del dashboard

## [v0.0.1] - 2025-12-17

### Added
- Inicio del proyecto con landing page básica y estructura inicial

[Unreleased]: https://github.com/nachovaz/PadelTeamViewer/compare/v0.5.0...HEAD
[v0.5.0]:     https://github.com/nachovaz/PadelTeamViewer/compare/v0.0.1...v0.5.0
[v0.0.1]:     https://github.com/nachovaz/PadelTeamViewer/releases/tag/v0.0.1
