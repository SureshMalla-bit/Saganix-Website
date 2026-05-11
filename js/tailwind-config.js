// js/tailwind-config.js

tailwind.config = {
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        'gold-muted': '#8C7830',
      },
      backgroundImage: {
        'gold-metallic': 'linear-gradient(135deg, #D4AF37 0%, #F5D061 50%, #D4AF37 100%)',
      },
      fontFamily: {
        loud: ['Montserrat', 'sans-serif'],
        minimal: ['Inter', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      },
      cursor: {
        none: 'none',
      }
    }
  }
}