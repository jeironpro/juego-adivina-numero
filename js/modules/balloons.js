/**
 * Globos de intentos: representan el presupuesto de 10 fallos de la partida.
 * @module modules/balloons
 */

import { MAX_ATTEMPTS } from "./game.js";
import { qs } from "../utils/dom.js";

const SVG_NS = "http://www.w3.org/2000/svg";

/** Ciclo de colores de la paleta Hum. */
const COLORS = ["c0", "c1", "c2", "c3", "c4"];

/**
 * Crea un nodo SVG con atributos.
 * @param {string} tag Etiqueta del nodo.
 * @param {object} [attrs] Atributos a establecer.
 * @returns {SVGElement} Nodo SVG creado.
 */
function svg(tag, attrs = {}) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [name, value] of Object.entries(attrs)) {
    node.setAttribute(name, value);
  }
  return node;
}

/**
 * Dibuja un globo como SVG en línea.
 * @param {string} color Clase de color (c0–c4).
 * @returns {HTMLElement} Elemento <li> con el globo.
 */
function buildBalloon(color) {
  const li = document.createElement("li");
  li.className = `balloon balloon--${color}`;
  li.dataset.state = "alive";

  const art = svg("svg", {
    class: "balloon__svg",
    viewBox: "0 0 48 66",
    "aria-hidden": "true",
  });

  art.appendChild(
    svg("ellipse", { class: "balloon__body", cx: "24", cy: "26", rx: "15", ry: "19" })
  );
  art.appendChild(
    svg("ellipse", {
      class: "balloon__gloss",
      cx: "19",
      cy: "17",
      rx: "4",
      ry: "7",
      transform: "rotate(-14 19 17)",
    })
  );
  art.appendChild(svg("path", { class: "balloon__knot", d: "M24 44 L21 50 L27 50 Z" }));
  art.appendChild(
    svg("path", {
      class: "balloon__string",
      d: "M24 50 C 26 55 22 58 24 61 C 26 64 23 66 25 66",
      fill: "none",
    })
  );

  li.appendChild(art);
  return li;
}

/**
 * Crea los 10 globos de la partida dentro del contenedor.
 * @param {HTMLElement} container Contenedor de la lista.
 * @returns {object} API de control de los globos.
 */
export function initBalloons(container) {
  let balloons = [];

  function render() {
    container.replaceChildren();
    balloons = [];
    for (let i = 0; i < MAX_ATTEMPTS; i += 1) {
      const balloon = buildBalloon(COLORS[i % COLORS.length]);
      container.appendChild(balloon);
      balloons.push(balloon);
    }
  }

  /**
   * Añade los residuos que se esparcen al reventar un globo.
   * @param {HTMLElement} li Globo en el que se produce la explosión.
   */
  function burst(li) {
    const wrap = document.createElement("span");
    wrap.className = "balloon-burst";

    for (let i = 0; i < 8; i += 1) {
      const angle = (360 / 8) * i;
      const dist = 18 + (i % 3) * 4;
      const track = document.createElement("span");
      track.className = "burst-track";
      track.style.setProperty("--angle", `${angle}deg`);
      track.style.setProperty("--dist", `${dist}px`);
      const dot = document.createElement("span");
      dot.className = `burst-dot${i % 2 === 0 ? " burst-dot--lg" : ""}`;
      track.appendChild(dot);
      wrap.appendChild(track);
    }

    li.appendChild(wrap);
  }

  /**
   * Revienta el siguiente globo vivo de izquierda a derecha.
   */
  function pop() {
    const next = balloons.find((node) => node.dataset.state === "alive");
    if (!next) return;

    next.dataset.state = "popped";
    const art = qs(".balloon__svg", next);
    art.classList.add("balloon__svg--popped");
    burst(next);
    window.setTimeout(() => next.remove(), 480);
  }

  /**
   * Manda volar los globos restantes (celebración al acertar).
   */
  function celebrate() {
    balloons.forEach((node, index) => {
      if (node.dataset.state !== "alive") return;
      const art = qs(".balloon__svg", node);
      art.style.setProperty("--fly-delay", `${index * 60}ms`);
      art.classList.add("balloon__svg--flying");
    });
  }

  /** Restaura los 10 globos para una partida nueva. */
  function reset() {
    render();
  }

  render();
  return { pop, celebrate, reset };
}