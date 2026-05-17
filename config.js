/**
 * Configuration for "For You, With Love" Flower Animation
 * Edit these values to customise the visualisation.
 */
const CONFIG = {

  // ── TIMING ────────────────────────────────────────────
  BLOOM_START : 1.8,   // seconds until main flower starts blooming
  BLOOM_DONE  : 9.5,   // seconds until main flower is fully open

  // ── NAMES ─────────────────────────────────────────────
  recipientName : 'Anu',
  senderName    : 'Rafi',

  // ── COLORS ────────────────────────────────────────────
  colors: {
    gold  : '#d4a853',
    rose  : '#c84b6e',
    cream : '#f5ede0',
    deep  : '#0a0608',
    soil  : '#1a0f08',
  },

  // ── PARTICLE COUNTS ───────────────────────────────────
  particles: {
    soil         : 120,
    grassFlowers : 32,
    bokeh        : 22,
    pollen       : 60,
  },

  // ── STEM ──────────────────────────────────────────────
  stem: {
    bottomOffsetY : 0.42,   // fraction of H below centre for stem base
    width         : (s) => 6.5 * s,
  },

  // ── PETAL LAYERS ──────────────────────────────────────
  petals: {
    outer : { count:8,  length:(s)=>88*s,  width:(s)=>36*s,  startTime:0.40, layerGap:0.22, duration:1.10, depth:1.00 },
    mid   : { count:8,  length:(s)=>62*s,  width:(s)=>24*s,  startTime:1.80, layerGap:0.17, duration:0.90, depth:0.85 },
    inner : { count:6,  length:(s)=>44*s,  width:(s)=>17*s,  startTime:3.00, layerGap:0.13, duration:0.75, depth:0.70 },
  },

  // ── DEW DROPS ─────────────────────────────────────────
  dewDrops: {
    count     : 14,    // number of drops across outer petals
    minRadius : 1.8,   // px before SCALE
    maxRadius : 4.8,
  },

  // ── SECONDARY FLOWER ──────────────────────────────────
  // Shares root with main stem, curves far left with S-stem for depth separation
  secondaryFlower: {
    // Fraction of canvas: x left-of-centre, y slightly below main
    xFrac        : 0.55,   // further left for more dramatic S-curve
    yFrac        : 0.65,   // short stem, stays at similar height to main flower
    scale        : 0.50,   // size relative to main flower
    bloomDelay   : 2.0,    // extra seconds after BLOOM_START
    breezeScale  : 0.55,   // reduced wind influence (farther away)
    petalHueShift: 8,      // petals slightly warmer/older colour
  },

  // ── BREEZE ────────────────────────────────────────────
  breeze: {
    // Gentle sub-bloom micro-sway starts from T=0, fades in
    preBreezeAmp  : 0.12,   // tiny constant sway before bloom
    fadeInStart   : 4.0,    // seconds – begin ramping up to full breeze
    fadeInEnd     : 11.0,   // seconds – reaches full strength
  },

  // ── GRASS (regular short blades) ──────────────────────
  grass: {
    countPerPx  : 1/8,   // blades per pixel of width
    countBase   : 180,
    minH : 28, maxH : 52, hVar : 0.7,
    minW : 1.6, maxW : 2.4,
    minFreq : 0.4, maxFreq : 0.7,
    minAmp  : 3,   maxAmp  : 9,
    hue     : [100, 135],
    sat     : [40,  70],
    lit     : [14,  36],
  },

  // ── SHARP / TALL GRASS ────────────────────────────────
  sharpGrass: {
    count   : 42,
    minH    : 90,  maxH : 190,
    minW    : 0.7, maxW : 1.5,
    minFreq : 0.18, maxFreq : 0.38,
    minAmp  : 5,   maxAmp  : 14,
    hue     : [95,  145],
    sat     : [35,  65],
    lit     : [18,  42],
    // Some blades lean toward each flower (set during build)
    clusterRadius : 0.14,   // fraction of W around each flower stem
  },

  // ── SMALL WILDFLOWERS ─────────────────────────────────
  grassFlowerTypes: {
    daisy      : { count:7, lenBase:5, lenRand:4, core:'#ffe87a', p1:'#fff8e8',  p2:'#ffe0b0', veinColor:'rgba(200,160,80,0.20)' },
    violet     : { count:5, lenBase:4, lenRand:4, core:'#b06aee', p1:'#c97df5',  p2:'#9a3fd4', veinColor:'rgba(120,40,180,0.18)'  },
    yellow     : { count:6, lenBase:4, lenRand:3, core:'#ffe050', p1:'#ffe878',  p2:'#ffb800', veinColor:'rgba(180,140,40,0.18)'  },
    poppy      : { count:4, lenBase:7, lenRand:4, core:'#111111', p1:'#e03030',  p2:'#b81010', veinColor:'rgba(140,10,10,0.22)'   },
    bellflower : { count:5, lenBase:6, lenRand:3, core:'#5533cc', p1:'#7755ee',  p2:'#4422aa', veinColor:'rgba(80,30,180,0.20)'   },
  },
  grassFlowerBloomDelay : (done) => done + 0.8 + Math.random() * 3.5,

  // ── BOKEH ─────────────────────────────────────────────
  bokeh: {
    minR:30, maxR:90, minOp:0.04, maxOp:0.08,
    minFreq:0.2, maxFreq:0.8, warmRatio:0.55,
  },

  // ── POLLEN ────────────────────────────────────────────
  pollen: {
    minSize:1.2, maxSize:2.0, minLife:4, maxLife:6,
    hue:[38,56],
  },

  // ── MESSAGES ──────────────────────────────────────────
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
  messagePillDelay    : 600,   // ms after BLOOM_DONE
  messagePillInterval : 3500,  // ms between pills

  // ── MUSIC ─────────────────────────────────────────────
  // Set to a URL of an audio file (mp3/ogg) to enable the music button.
  // Leave as empty string '' to hide the music button.
  musicUrl : 'assets/music.mp3',   // e.g. 'https://example.com/song.mp3'
  musicLoop: true,
  musicVolume: 0.55,   // 0.0 – 1.0

};