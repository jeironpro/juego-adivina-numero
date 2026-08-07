# Wireframes

## Wireframe de baja fidelidad

```
┌──────────────────────────────────────────────────────────┐
│ [ Saltar al juego ]                                      │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ adivina el número          Cómo se juega   GitHub   │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│  JUEGO · 1–100                                           │
│  Adivina el número            ┌───────────────────┐      │
│  Estoy pensando en un         │      (?)          │      │
│  número entre 1 y 100...      │                   │      │
│                               │ Tu suposición     │      │
│                               │ [ Entre 1 y 100 ] │      │
│                               │ [  Adivinar  ]    │      │
│                               │ [ mensaje ]       │      │
│                               │ [intentos] [record]│     │
│                               │ [ Nuevo juego ]   │      │
│  ┌────────────────────────────────────────────────┐     │
│  │ ¿Cómo se juega?                                │     │
│  │ 01 Pienso un número secreto                    │     │
│  │ 02 Escribe tu suposición                       │     │
│  │ 03 Sigue las pistas                            │     │
│  │ Tu mejor récord se guarda en este navegador    │     │
│  └────────────────────────────────────────────────┘     │
│  ┌──────────────────────────────────────────────────┐   │
│  │ Adivina el número · Inténtalo otra vez · 1–100  │   │
│  └──────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────┘
```

## Wireframe de alta fidelidad

### Mobile (320–414 px)

```
┌──────────────────────────────┐
│ [ Saltar al juego ]          │
│ adivina el número   GitHub   │
│ ───────────────────────────  │
│ JUEGO · 1–100                │
│ Adivina el                   │
│ número                       │
│ Estoy pensando en un número  │
│ entre el 1 y el 100...       │
│                              │
│ ┌──────────────────────────┐ │
│ │                     (?)  │ │
│ │ Tu suposición            │ │
│ │ ┌─────────────┐ ┌─────┐  │ │
│ │ │ Entre 1 y 100│ │ Adiv│  │ │
│ │ └─────────────┘ └─────┘  │ │
│ │ ┌──────────────────────┐ │ │
│ │ │ Piensa un número...  │ │ │
│ │ └──────────────────────┘ │ │
│ │ ┌─────────┐ ┌─────────┐  │ │
│ │ │0 Intentos│ │— Récord │  │ │
│ │ └─────────┘ └─────────┘  │ │
│ │ [ Nuevo juego ]          │ │
│ └──────────────────────────┘ │
│ ¿Cómo se juega?              │
│ 01 Pienso un número secreto  │
│ 02 Escribe tu suposición     │
│ 03 Sigue las pistas          │
│ ───────────────────────────  │
│ ADIVINA · INTÉNTALO · 1–100  │
└──────────────────────────────┘
```

**Notas mobile**

- El hero apila en una columna: texto primero, tarjeta debajo.
- El formulario mantiene input + botón en una fila.
- La marca "(?)" sobresale del borde superior derecho de la tarjeta.
- Los pasos de las reglas se apilan verticalmente.

### Desktop (>= 960 px)

```
┌──────────────────────────────────────────────────────────┐
│ adivina el número        Cómo se juega        GitHub     │
│ ───────────────────────────────────────────────────────  │
│                     ┌───────────────────────────────┐    │
│ JUEGO · 1–100       │ Tu suposición           (?)   │    │
│ Adivina el número   │ ┌──────────────┐ ┌──────────┐ │    │
│ Estoy pensando en   │ │ Entre 1 y 100│ │ Adivinar │ │    │
│ un número entre el  │ └──────────────┘ └──────────┘ │    │
│ 1 y el 100...       │ ┌────────────────────────────┐ │    │
│                     │ │ Piensa un número entre...  │ │    │
│                     │ └────────────────────────────┘ │    │
│                     │ ┌────────────┐ ┌────────────┐  │    │
│                     │ │ 0 Intentos │ │ — Mejor    │  │    │
│                     │ │            │ │   récord   │  │    │
│                     │ └────────────┘ └────────────┘  │    │
│                     │ [       Nuevo juego       ]    │    │
│                     └───────────────────────────────┘    │
│ ───────────────────────────────────────────────────────  │
│ ¿Cómo se juega?                                          │
│ 01            02             03                          │
│ Pienso un     Escribe tu     Sigue las                   │
│ número        suposición     pistas                      │
│ secreto                                                   │
│ ───────────────────────────────────────────────────────  │
│ ADIVINA EL NÚMERO · INTÉNTALO OTRA VEZ · 1–100 · ...     │
└──────────────────────────────────────────────────────────┘
```

**Notas desktop**

- El hero usa dos columnas: texto a la izquierda (leído primero), tarjeta a la derecha.
- La marca "(?)" sobresale del borde de la tarjeta como detalle asimétrico.
- Los tres pasos se disponen en una fila con número grande y regla superior.
- El pie usa un marquee (línea en desplazamiento infinito) a lo ancho de la página.
