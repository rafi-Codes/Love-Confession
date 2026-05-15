# Love.html — Configuration Guide

`Love.html` is a single-file, self-contained HTML page (no build step) that renders an animated “flower + love messages” scene on a `<canvas>`, driven by a single configuration object.

---

## Quick start

1. Open `Love.html` in your browser (double-click) **or** run a local static server.
2. The animation starts automatically.

### Recommended (avoids any potential browser restrictions)
If you want to run via a local server:
- In the same folder as `Love.html`, start a static server (any tool is fine), then open:
  - `http://localhost:<port>/Love.html`

---

## Main configuration: `const CONFIG = { ... }`

All customization happens in the top section of the file:

```js
const CONFIG = {
  headline:  "For You, With Love",
  subtitle:  "Tofu",
  signature: "— with love, Rafi",
  messages: [ ... ],

  theme: { ... },
  flower: { ... },
  timing: { ... },

  backgroundImage: null,
  backgroundImageOpacity: 0.08,
};
```

### Where to edit
- Open `Love.html`
- Scroll to the `CONFIG` object near the top
- Change values directly

---

## Text customization

### `headline`
Main title text (displayed in large uppercase letters).

### `subtitle`
Italic line under the headline.

### `signature`
Small “from” line under the scene.

### `messages` (love message pills)
An array of strings used by the floating pill generator.

```js
messages: [
  "Every moment with you feels like magic ✨",
  "You light up every room you walk into 🌟",
  "I'm so grateful you're in my life 🌸"
]
```

**Tip:** Keep it non-empty.

---

## Theme / colors (`CONFIG.theme`)

`CONFIG.theme` controls the palette for petals, glow, stem, leaves, center, sparkles, and background gradient.

Common fields:
- Petal gradients: `petalA`, `petalB`, `petalC`, plus `petalGlow`
- Stem/leaf: `stem`, `stemGlow`, `leafA`, `leafB`
- Center: `centerSpecular`, `centerMid`, `centerMain`, `centerEdge`, `centerGlow`, `centerPollen`
- Background: `bgA`, `bgB`, `bgC`, `bgD`, `bgBlob1..bgBlob4`
- Sparkles: `sparkleGoldHue`, `sparklePinkHue`
- Pill styling: `pillBg`, `pillBorder`, `pillText`, `pillDot`

**How to change:**
- Most values are color strings (hex like `#e8557a`, or `rgba(...)`)
- `*Hue` fields are numeric degrees (e.g. `45`)

---

## Flower geometry (`CONFIG.flower`)

Controls the size and shape of the drawn flower (petals/layers/stem/center).

Key fields:
- `size`: canvas size for the flower (used as width/height)
- `cx`, `cy`: center position inside that canvas
- `petalCount`: number of outer petals
- `petalRx`: petal “width” radius
- `petalLength`: petal length
- `petalOrder`: array controlling the animation order of petals
- Layer controls:
  - `layer2Count`, `layer2Rx`, `layer2Length`, `layer2Offset`
  - `layer3Count`, `layer3Rx`, `layer3Length`, `layer3Offset`
- Stem controls:
  - `stemBotX`, `stemBotY`, `stemWidth`, `stemCurveDx`
- Center controls:
  - `centerRadius`, `centerHaloR`

**Tip:** If you change `petalCount`, also update `petalOrder` to be a permutation of `0..petalCount-1`.

---

## Animation timing (`CONFIG.timing`)

Controls when each part animates in.

Fields:
- `stemStart`, `stemDur`
- `leafStart`, `leafDur`
- `centerStart`, `centerDur`
- Petals:
  - `petalStart`, `petalGap`, `petalDur`
- Layer 2:
  - `layer2Start`, `layer2Gap`, `layer2Dur`
- Layer 3:
  - `layer3Start`, `layer3Gap`, `layer3Dur`
- Other:
  - `sparkleAt`: fraction of petal animation time when sparkles appear (e.g. `0.6`)
  - `orbitDelay`: delay before the hearts orbit starts
  - Message pill timing:
    - `msgDelay`: delay before first message
    - `msgInterval`: time between new messages

**Tip:** Durations are in milliseconds.

---

## Background image override

By default, the background is generated procedurally with gradients + blobs.

To place your own background image:

```js
backgroundImage: "data:image/png;base64,..." // or any URL/data-uri
backgroundImageOpacity: 0.08
```

- Set `backgroundImage` to a valid **URL** or **data URI**.
- Use `backgroundImageOpacity` to blend it in (try `0.05`–`0.25`).
- Leave `backgroundImage: null` to use the generated gradient background.

---

## Common tweaks (examples)

### 1) Make the flower larger
Change:
```js
flower: {
  size: 440,
}
```

### 2) Shorten the whole animation
Reduce durations, for example:
```js
timing: {
  stemDur: 650,
  leafDur: 350,
  centerDur: 350,
  petalDur: 500,
  layer2Dur: 450,
  layer3Dur: 380,
}
```

### 3) Change the message cadence
```js
timing: {
  msgDelay: 2500,
  msgInterval: 2200,
}
```

---

## Notes / gotchas

- Keep numeric config values **finite** (avoid `NaN`/`Infinity`). The code includes safety checks for gradients, but invalid geometry can still break visuals.
- `messages` should contain at least one string.
- If you edit `petalOrder`, ensure its length matches `petalCount` and it contains valid indices.

---

## File structure

This repository contains only one runtime file:
- `Love.html`

Everything else is inline (CSS + JS) inside that file.

