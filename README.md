# Love.html — Configuration Guide

"For You, With Love" is a beautiful animated flower scene with customizable messages and visual parameters.

---

## Structure

The project now consists of two separate files:

- **`Love.html`** — The main HTML/CSS/Canvas animation (imports config)
- **`config.js`** — All customizable parameters (separate from the animation)

This separation makes it easy to customize the visualization without touching the animation code.

---

## Quick Start

1. Open `Love.html` in your browser (double-click) **or** run a local static server
2. The animation starts automatically
3. Edit `config.js` to customize the scene

### Running with a local server (recommended)
If you encounter any browser restrictions, run a local static server:
```bash
# Using Python 3
python -m http.server 8000

# Then open: http://localhost:8000/Love.html
```

---

## Customization: Editing `config.js`

All parameters are in `config.js`. Edit values directly and refresh your browser to see changes.

### Key Configuration Sections

#### **TIMING** — When things bloom
```js
BLOOM_START: 1.8,  // Seconds before bloom begins
BLOOM_DONE: 9.5,   // Full bloom complete
```

#### **COLORS** — Rose, gold, cream palette
```js
colors: {
  gold: '#d4a853',    // Accent gold
  rose: '#c84b6e',    // Rose/pink
  cream: '#f5ede0',   // Cream/white
  deep: '#0a0608',    // Dark background
  soil: '#1a0f08',    // Soil color
}
```

#### **PARTICLES** — Counts for visual elements
```js
particles: {
  soil: 120,              // Soil texture particles
  grass: (W) => ...,      // Grass blades (function of width)
  grassFlowers: 28,       // Tiny wildflowers
  bokeh: 22,              // Bokeh background lights
  pollen: 60,             // Floating pollen particles
}
```

#### **STEM** — Main stem appearance
```js
stem: {
  bottomOffsetY: 0.42,           // How far from center (0-1)
  lengthFrac: 0.36,              // Length as fraction of canvas
  width: (SCALE) => 6.5 * SCALE, // Thickness (function)
}
```

#### **PETALS** — Petal layers (outer, mid, inner)
```js
petals: {
  outer: {
    count: 8,                    // Number of outer petals
    length: (SCALE) => 88 * SCALE,
    width: (SCALE) => 36 * SCALE,
    startTime: 0.4,              // When they start blooming (relative to BLOOM_START)
    layerGap: 0.22,              // Delay between each petal
    duration: 1.1,               // How long to bloom
    depthFactor: 1.0,            // Shadow/visual depth
  },
  mid: { ... },   // 8 medium petals
  inner: { ... }, // 6 small inner petals
}
```

#### **DEW DROPS** — Water droplets
```js
dewDrops: {
  count: 16,
  minRadius: 2.0,
  maxRadius: 3.2,
}
```

#### **MESSAGES** — Floating pills
```js
messages: [
  "Every moment with you feels like magic ✨",
  "You light up every room you walk into 🌟",
  // ... more messages
],
messagePillDelay: 0.6,        // Delay after bloom starts
messagePillInterval: 3500,    // Milliseconds between messages
messagePillDuration: () => 7 + Math.random() * 4,  // How long each shows
```

#### **GRASS** — Grass blade styles
```js
grass: {
  minHeight: 28,
  maxHeight: 52,
  minWidth: 1.6,
  maxWidth: 2.4,
  hueRange: [100, 135],  // Green hues
  satRange: [40, 70],    // Saturation
  lightRange: [14, 36],  // Brightness
  // ... more params
}
```

#### **GRASS FLOWER TYPES** — Tiny wildflowers
```js
grassFlowerTypes: {
  daisy: {
    petalCount: 7,
    coreColor: '#ffe87a',
    petalColor: '#fff8e8',
    // ...
  },
  violet: { ... },
  yellow: { ... },
}
```

#### **BOKEH** — Background lights
```js
bokeh: {
  minRadius: 30,
  maxRadius: 90,
  minOpacity: 0.04,
  maxOpacity: 0.08,
  warmRatio: 0.55,  // 55% warm colors, 45% cool
}
```

#### **POLLEN** — Floating pollen particles
```js
pollen: {
  minSize: 1.2,
  maxSize: 2,
  minLife: 4,
  maxLife: 6,
  hueRange: [38, 56],  // Yellow/orange hues
}
```

#### **ANIMATION TIMINGS** — When each part animates
```js
animation: {
  sepal: { startTime: 0, duration: 0.8 },
  stamen: { startTime: 2.8, duration: 0.6 },
  centerDisk: { startTime: 2.2, duration: 0.7 },
  leaves: { startTime: 2.0, duration: 0.9 },
  stem: { startTime: 0.8, duration: 1.2 },
}
```

---

## Examples

### Make the flower bloom slower
```js
// In config.js
BLOOM_START: 3.0,   // Start blooming later
BLOOM_DONE: 15.0,   // Take longer to fully bloom
```

### Change the flower colors (rose to blue)
Update the petal gradients in `Love.html` — petal colors are defined in the `drawPetal()` function's `coreGrad` and `linGrad()` calls.

Or simpler: modify the CSS colors at the top of `Love.html`:
```css
:root {
  --gold: #9b59b6;     /* purple instead of gold */
  --rose: #3498db;     /* blue instead of rose */
  /* ... */
}
```

### Change messages
Edit the `messages` array in `config.js`:
```js
messages: [
  "Custom message 1 💖",
  "Custom message 2 ✨",
  "Custom message 3 🌸",
],
```

### Add more grass flowers
```js
grassFlowers: 50,  // Instead of 28
```

### Make pollen particles bigger
```js
pollen: {
  minSize: 2.5,  // Was 1.2
  maxSize: 4.0,  // Was 2
  // ...
}
```

---

## Technical Notes

### File sizes
- `Love.html` ~45 KB (with all animations, no build needed)
- `config.js` ~5 KB (all parameters)

### Browser compatibility
Works on all modern browsers that support:
- HTML5 Canvas
- ES6+ (arrow functions, template literals)
- CSS Grid & Flexbox

### No dependencies
Pure vanilla JavaScript — no libraries, no build step, no npm needed.

### Performance
- Runs smoothly at 60 FPS on most devices
- Canvas-based rendering (GPU optimized)
- Particle animations handled efficiently

---

## Troubleshooting

**Animation doesn't start?**
- Make sure `config.js` is in the same folder as `Love.html`
- Check browser console for errors (F12 → Console)

**Particles not appearing?**
- Check particle counts aren't set to 0
- Verify color values are valid hex/rgb/hsl

**Messages not showing?**
- Ensure `messagePillDelay` isn't set too high
- Check that `messages` array isn't empty

**Slow performance?**
- Reduce particle counts (soil, pollen, bokeh)
- Decrease screen resolution
- Check for browser extensions that might affect canvas rendering

---

## Credits

Created with love for beautiful, memorable moments.
