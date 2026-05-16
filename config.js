/**
 * Configuration for "For You, With Love" Flower Animation
 * Edit these values to customize the visualization
 */

const CONFIG = {
  // ── TIMING ────────────────────────────────────
  BLOOM_START: 1.8,  // seconds before bloom begins
  BLOOM_DONE: 9.5,   // full bloom complete
  
  // ── COLORS ────────────────────────────────────
  colors: {
    gold: '#d4a853',
    rose: '#c84b6e',
    cream: '#f5ede0',
    deep: '#0a0608',
    soil: '#1a0f08',
  },

  // ── PARTICLE COUNTS ───────────────────────────
  particles: {
    soil: 120,
    grass: (W) => Math.floor(W / 8) + 180,
    grassFlowers: 28,
    bokeh: 22,
    pollen: 60,
  },

  // ── STEM PARAMETERS ───────────────────────────
  stem: {
    bottomOffsetY: 0.42,  // fraction of H from center down
    lengthFrac: 0.36,     // fraction of H
    width: (SCALE) => 6.5 * SCALE,
  },

  // ── PETAL CONFIGURATION ───────────────────────
  petals: {
    outer: {
      count: 8,
      length: (SCALE) => 88 * SCALE,
      width: (SCALE) => 36 * SCALE,
      startTime: 0.4,
      layerGap: 0.22,
      duration: 1.1,
      depthFactor: 1.0,
    },
    mid: {
      count: 8,
      length: (SCALE) => 62 * SCALE,
      width: (SCALE) => 24 * SCALE,
      startTime: 1.8,
      layerGap: 0.17,
      duration: 0.9,
      depthFactor: 0.85,
    },
    inner: {
      count: 6,
      length: (SCALE) => 44 * SCALE,
      width: (SCALE) => 17 * SCALE,
      startTime: 3.0,
      layerGap: 0.13,
      duration: 0.75,
      depthFactor: 0.7,
    },
  },

  // ── DEW DROPS ─────────────────────────────────
  dewDrops: {
    count: 16,
    minRadius: 2.0,
    maxRadius: 3.2,
  },

  // ── ANIMATION TIMINGS ─────────────────────────
  animation: {
    sepal: {
      startTime: 0,
      duration: 0.8,
    },
    stamen: {
      startTime: 2.8,
      duration: 0.6,
    },
    centerDisk: {
      startTime: 2.2,
      duration: 0.7,
    },
    leaves: {
      startTime: 2.0,
      duration: 0.9,
    },
    stem: {
      startTime: 0.8,
      duration: 1.2,
    },
  },

  // ── MESSAGES (FLOATING PILLS) ─────────────────
  messages: [
    "Every moment with you feels like magic ✨",
    "You light up every room you walk into 🌟",
    "I'm so grateful you're in my life 🌸",
    "Your smile is my favourite thing 💛",
    "Thank you for being wonderfully you 🦋",
    "You deserve all the joy in the universe 🌙",
    "Wishing you endless happiness, always 🌺",
    "You are loved more than words can say 💗",
  ],
  messagePillDelay: 0.6,  // delay after BLOOM_DONE to start pills
  messagePillInterval: 3500,  // ms between pills
  messagePillDuration: () => 7 + Math.random() * 4,  // duration range

  // ── GRASS CONFIGURATION ───────────────────────
  grass: {
    minHeight: 28,
    maxHeight: 52,
    heightVariance: 0.7,
    minWidth: 1.6,
    maxWidth: 2.4,
    minFreq: 0.4,
    maxFreq: 0.7,
    minAmp: 3,
    maxAmp: 9,
    hueRange: [100, 135],
    satRange: [40, 70],
    lightRange: [14, 36],
  },

  // ── SMALL GRASS FLOWERS ───────────────────────
  grassFlowerTypes: {
    daisy: {
      petalCount: 7,
      petalLen: () => 5 + Math.random() * 4,
      coreColor: '#ffe87a',
      petalColor: '#fff8e8',
      petalColor2: '#ffe0b0',
    },
    violet: {
      petalCount: 5,
      petalLen: () => 4 + Math.random() * 4,
      coreColor: '#b06aee',
      petalColor: '#c97df5',
      petalColor2: '#9a3fd4',
    },
    yellow: {
      petalCount: 6,
      petalLen: () => 4 + Math.random() * 4,
      coreColor: '#ffe050',
      petalColor: '#ffe050',
      petalColor2: '#ffb800',
    },
  },
  grassFlowerBloomDelay: () => CONFIG.BLOOM_DONE + 0.5 + Math.random() * 3.5,

  // ── BREEZE PARAMETERS ─────────────────────────
  breeze: {
    baseFreq1: 0.29,
    baseFreq2: 0.71,
    baseFreq3: 1.87,
    baseAmp1: 0.55,
    baseAmp2: 0.22,
    baseAmp3: 0.07,
    gustUpdateFreq: 3.5,
    gustRandomness: 5,
  },

  // ── BOKEH BACKGROUND ──────────────────────────
  bokeh: {
    minRadius: 30,
    maxRadius: 90,
    minOpacity: 0.04,
    maxOpacity: 0.08,
    minFreq: 0.2,
    maxFreq: 0.8,
    warmRatio: 0.55,  // chance of warm color
  },

  // ── POLLEN ────────────────────────────────────
  pollen: {
    minSize: 1.2,
    maxSize: 2,
    minLife: 4,
    maxLife: 6,
    hueRange: [38, 56],
    bornAfter: () => CONFIG.BLOOM_DONE + Math.random() * 4,
  },
};
