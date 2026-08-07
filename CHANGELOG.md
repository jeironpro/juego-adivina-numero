# Changelog

Todas las modificaciones notables de este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/), y este proyecto respeta [Versionado Semántico](https://semver.org/lang/es/).

## [0.1.0] - 2026-08-07

### Added

- Juego de adivinar un número secreto entre 1 y 100.
- Pistas de "más alto" / "más bajo" con retroalimentación accesible (`aria-live`).
- Contador de intentos por partida.
- Mejor récord persistido en `localStorage`.
- Botón "Nuevo juego" para reiniciar la partida.
- Validación del campo de entrada (entero dentro del rango) con mensaje de error accesible.
- Diseño responsive mobile-first (320, 375, 414 y 768 px) con soporte de `prefers-reduced-motion`.
- Personaje decorativo (marca "?") que reacciona a cada suposición.
- Documentación técnica completa en `docs/`.
