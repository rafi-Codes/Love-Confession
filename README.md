# 🌹 For You, With Love — Animated Flower Confession

A stunning interactive HTML5 Canvas animation featuring a blooming rose with a secondary flower, animated messages, and beautiful visual effects. Perfect for expressing your feelings or creating a romantic experience.

## ✨ Features

- **Dual Blooming Flowers**: Main rose with a secondary companion flower connected by an S-curved stem
- **Smooth Animation**: 60fps canvas rendering with easing functions and physics
- **Customizable Messages**: Floating love messages that appear throughout the animation
- **Music Integration**: Background music with auto-play and manual toggle button
- **Visual Effects**:
  - Particle systems (pollen, bokeh lights, dew drops)
  - Subsurface scattering on petals with specularity
  - Realistic stem with micro-trichomes and leaves
  - Animated grass layers (short grass, sharp grasses, tiny wildflowers)
  - Dynamic breeze wind effect
  - Vignette and grain overlays for cinematic feel
- **Fully Configurable**: Separate config file for easy customization
- **Responsive**: Adapts to different screen sizes

---

## 🚀 Quick Start

### Option 1: Direct Open (Simple)
1. Double-click `Love.html` to open in your default browser
2. Wait ~2 seconds for music to auto-play

### Option 2: Local Server (Recommended)
Recommended if you have audio issues or want to avoid browser security restrictions:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Then open in your browser: http://localhost:8000
```

---

## 📁 Project Structure

```
Love-Confession/
├── Love.html          # Main animation (HTML/CSS/Canvas + JS)
├── config.js          # Customizable parameters
├── assets/
│   └── music.mp3      # Background music
└── README.md          # This file
```

---

## ⚙️ Customization: Editing `config.js`

All visual and behavior parameters are in `config.js`. Simply edit the values and refresh your browser to see changes instantly.

### Key Configuration Sections

#### **TIMING** — Animation Timeline
```js
BLOOM_START: 1.8,    // When main stem starts growing (seconds)
BLOOM_DONE: 9.5,     // Full bloom complete
```

#### **COLORS** — Palette
```js
colors: {
  gold: '#d4a853',      // Warm accent
  rose: '#c84b6e',      // Main flower color
  cream: '#f5ede0',     // Light/text
  deep: '#0a0608',      // Dark shadows
  soil: '#1a0f08',      // Ground
}
```

#### **PARTICLES** — Effects Intensity
```js
particles: {
  soil: 120,                      // Soil particles
  grass: (W) => Math.floor(W / 8) + 180,  // Grass count
  grassFlowers: 28,               // Tiny wildflowers
  bokeh: 22,                      // Background lights
  pollen: 60,                     // Pollen particles
}
```

#### **PETALS** — Flower Layers
Three petal layers with independent configurations:
```js
petals: {
  outer: {
    count: 8,                    // Number of petals
    length: (SCALE) => 88 * SCALE,
    width: (SCALE) => 36 * SCALE,
    startTime: 0.4,              // When this layer starts blooming
    layerGap: 0.22,              // Delay between petals
    duration: 1.1,               // How long to bloom
    depthFactor: 1.0,            // Depth scaling
  },
  // mid and inner layers also customizable
}
```

#### **SECONDARY FLOWER** — The companion
```js
secondaryFlower: {
  xFrac: 0.16,        // Position: 16% from left
  yFrac: 0.58,        // Position: 58% from top
  scale: 0.50,        // 50% size of main flower
  bloomDelay: 2.8,    // Starts 2.8s after main flower
  breezeScale: 0.55,  // Less wind influence (appears farther)
  petalHueShift: 8,   // Slightly warmer petal color
}
```

#### **MUSIC** — Audio Settings
```js
musicUrl: 'assets/music.mp3',  // Path to audio file
musicLoop: true,                // Loop the music
musicVolume: 0.55,              // Volume 0.0–1.0
```

#### **MESSAGES** — Floating Pills
```js
messages: [
  "Every moment with you feels like magic ✨",
  "You light up every room you walk into 🌟",
  // Add your own messages here...
],
messagePillDelay: 0.6,        // Delay after bloom starts
messagePillInterval: 3500,    // ms between messages
```

---

## 🎨 Visual Customization Examples

### Change the Rose Color
```js
colors: {
  rose: '#ff1493',  // Deep pink instead of mauve
}
```

### Make Flowers Bloom Faster
```js
BLOOM_START: 0.8,   // Start earlier
BLOOM_DONE: 5.0,    // Finish sooner
petals: {
  outer: { duration: 0.6 },  // Faster bloom
  // ...
}
```

### Add More Pollen
```js
particles: {
  pollen: 150,  // 2.5x more particles
}
```

### Adjust Grass Heights
```js
grass: {
  minHeight: 40,    // Taller minimum
  maxHeight: 80,    // Taller maximum
}
```

### Reposition Secondary Flower
```js
secondaryFlower: {
  xFrac: 0.30,  // Move right
  yFrac: 0.40,  // Move up
}
```

---

## 🎵 Audio Setup

1. Place your music file in `assets/music.mp3`
2. The music auto-plays 1 second after page load
3. Click the music button (♪) to pause/resume
4. Customize timing:
   ```js
   musicUrl: 'assets/your-song.mp3',
   musicVolume: 0.7,  // Adjust volume
   ```

---

## 🌐 Browser Support

- **Chrome/Edge**: ✅ Full support
- **Firefox**: ✅ Full support
- **Safari**: ✅ Full support
- **Mobile browsers**: ✅ Responsive and touch-friendly

**Note**: Some browsers may require a local server for audio playback due to autoplay policies.

---

## 💝 Customization Tips

1. **Test frequently** — Refresh browser to see changes instantly
2. **Small adjustments** — Change values by small increments (±5) to see subtle effects
3. **Use HSL for colors** — Easier to adjust hue/saturation/lightness
4. **Backup original** — Save a copy before major changes
5. **Use browser DevTools** — Check console for any errors

---

## 🛠️ Technical Details

- **Canvas 2D API**: All rendering via HTML5 Canvas
- **No Dependencies**: Pure vanilla JavaScript (ES6+)
- **Responsive**: Scales to different screen sizes
- **Performance**: Optimized for 60fps smooth animation
- **Accessibility**: Semantic HTML with ARIA labels

---

## 🎭 Animation Timeline

| Time (sec) | Event |
|---|---|
| 0–0.8 | Stem grows |
| 1.8+ | Main flower blooms (outer petals) |
| 2.0+ | Leaves unfold |
| 2.2+ | Center disk appears |
| 2.8+ | Secondary flower starts |
| 4.0+ | Full bloom with all effects |
| 9.5+ | Love messages appear |

---

## 📝 License & Attribution

Create and share freely. Perfect for:
- Valentine's Day confessions
- Wedding proposals
- Anniversary messages
- Love declarations
- Romantic surprises

---

## 🤝 Contributing

Feel free to fork, customize, and improve! Share your beautiful versions.

---

## 💬 Need Help?

Check `config.js` comments for detailed parameter explanations. Most customizations are one-line edits!
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
