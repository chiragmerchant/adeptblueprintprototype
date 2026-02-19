// branding.js
// Multiple branding configurations keyed by theme ('light' or 'dark')

export const brandings = {
  'light': {
    label: 'Theme 1 (Default)',          // ← human-readable name for UI
    fonts: {
      heading: {
        face: 'Arial',
        size: 44,
        bold: true
      },
      body: {
        face: 'Calibri',
        size: 24
      },
      subtitle: {
        face: 'Arial',
        size: 28
      },
      footer: {
        face: 'Calibri',
        size: 10
      }
    },
    colors: {
      primary: '007BFF',      // blue for titles
      secondary: '6C757D',    // gray for subtitles/presenter
      accent: 'FFC107',       // yellow for highlights/visual placeholders
      background: 'FFFFFF',
      text: '000000',
      footerBg: '001F3F',     // dark navy for banner
      footerText: 'FFFFFF'
    },
    brandingElements: {
      logo: {
        path: 'adept-logo.png',          // replace with real path, URL, or base64
        x: 11.0,
        y: 0.2,
        w: 1.8,
        h: 0.8
      },
      footerBanner: {
        rect: {
          x: 0,
          y: 7.2,
          w: '100%',
          h: 0.4,
          fill: { color: '001F3F' }
        },
        text: {
          content: 'ADEPT | Confidential | Feb 2026',
          options: {
            x: 0.5,
            y: 7.3,
            w: '90%',
            color: 'FFFFFF',
            fontSize: 10,
            align: 'left'
          }
        }
      },
      slideNumber: {
        x: 12.0,
        y: 7.3,
        color: 'FFFFFF',
        fontSize: 10
      }
    }
  },

  'dark': {
    label: 'Theme 2', 
    fonts: {
      heading: {
        face: 'Arial',
        size: 44,
        bold: true
      },
      body: {
        face: 'Calibri',
        size: 24
      },
      subtitle: {
        face: 'Arial',
        size: 28
      },
      footer: {
        face: 'Calibri',
        size: 10
      }
    },
    colors: {
      primary: '4DA6FF',      // lighter blue for visibility on dark bg
      secondary: 'A9A9A9',    // lighter gray
      accent: 'FFD700',       // gold/yellow for highlights
      background: '000000',
      text: 'FFFFFF',
      footerBg: '333333',     // medium gray for banner
      footerText: 'FFFFFF'
    },
    brandingElements: {
      logo: {
        path: 'adept-logo.png',          // ideally use a light-version logo here
        x: 11.0,
        y: 0.2,
        w: 1.8,
        h: 0.8
      },
      footerBanner: {
        rect: {
          x: 0,
          y: 7.2,
          w: '100%',
          h: 0.4,
          fill: { color: '333333' }
        },
        text: {
          content: 'ADEPT | Confidential | Feb 2026',
          options: {
            x: 0.5,
            y: 7.3,
            w: '90%',
            color: 'FFFFFF',
            fontSize: 10,
            align: 'left'
          }
        }
      },
      slideNumber: {
        x: 12.0,
        y: 7.3,
        color: 'FFFFFF',
        fontSize: 10
      }
    }
  }
};