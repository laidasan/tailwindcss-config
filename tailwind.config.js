const { customFlexBasisUtil, customTypographyUtil, customGradientUtil } = require('./tailwindcss/config.js')
const { progressWithLevel4, progressWithLevel1, progressFractionFn } = require('./tailwindcss/config.js')
const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  // purge: [],
  target: 'ie11',
  prefix: '',
  important: false,
  separator: ':',
  presets: [],
  theme: {
    // breakpoints
    screens: {
      xs: '360px',
      sm: '1024px',
      md: '1280px',
      lg: '1680px'
    },

    // colors setting
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      white: '#ffffff',
      black: '#292929',
      red: '#ea475b',
      yellow: '##fefbd3',
      green: '#70be20',
      pink: '#ffe9ec',
      primary: '#00afb8',
      secondary: '#eeeeee',
      success: '#70be20',
      info: '#1654b9',
      warning: '#ff843f',
      danger: '##ea475b',
      gray: {
        100: '#f3f3f3',
        200: '#eeeeee',
        400: '#dddddd',
        600: '#a9a9a9',
        800: '#7e7e7e'
      },
      blue: {
        normal: '#1654b9',
        vivid: '#4e91ff',
        turquoise: '#00afb8',
        lake: '#39c8d0',
        eastern: '#028b95',
        egg: '#e6f9fa'
      },
      purple: {
        normal: '#78269f',
        lilac: '#a386d5'
      },
      orange: {
        normal: '#ffab31',
        desert: '#ff843f'
      }
    },

    // spacing , be used in [ margin , padding ]
    spacing: {
      px: '1px',
      ...progressWithLevel4(15)
    },

    // background
    backgroundColor: theme => theme('colors'),
    backgroundOpacity: theme => theme('opacity'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top'
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain'
    },

    // border
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.300', 'currentColor')
    }),
    borderOpacity: theme => theme('opacity'),
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px'
    },
    borderWidth: {
      default: '3px',
      0: '0',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px'
    },

    // box-shadow
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none'
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed'
    },

    // flex 系列
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none'
    },
    flexGrow: {
      0: '0',
      default: '1'
    },
    flexShrink: {
      0: '0',
      default: '1'
    },
    order: {
      first: '-9999',
      last: '9999',
      ...progressWithLevel1(12)
    },

    // font , 文本控制系列
    fontFamily: {
      sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      default: ['PingFangTC', '"Microsoft JhengHei"', '微軟正黑體', 'Helvetica', 'Arial', 'Verdana', 'sans-serif']
    },
    fontSize: {
      0: '0px',
      12: '12px',
      14: '14px',
      15: '15px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      28: '28px',
      40: '40px'
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      28: '28px',
      32: '32px',
      38: '38px',
      52: '52px'
    },
    textColor: theme => theme('colors'),

    // positoin 系列
    inset: {
      0: '0',
      '1/2': '50%',
      auto: 'auto'
    },

    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal'
    },
    // margin , padding
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing'))
    }),
    padding: theme => theme('spacing'),

    // max 系列
    maxHeight: {
      0: '0px',
      '90pct': '90%',
      auto: 'auto',
      full: '100%',
      screen: '100vh'
    },
    maxWidth: (theme) => ({
      0: '0px',
      '90pct': '90%',
      auto: 'auto',
      none: 'none',
      full: '100%',
      ...theme('screens')
    }),

    // min 系列
    minHeight: {
      0: '0',
      38: '38px',
      auto: 'auto',
      full: '100%',
      screen: '100vh'
    },
    minWidth: {
      0: '0',
      full: '100%'
    },
    outline: {
      none: ['2px solid transparent', '2px'],
      white: ['2px dotted white', '2px'],
      black: ['2px dotted black', '2px']
    },
    placeholderColor: theme => theme('colors.gray'),

    // SVG 系列
    fill: {
      current: 'currentColor'
    },
    stroke: {
      current: 'currentColor'
    },
    strokeWidth: {
      0: '0',
      1: '1',
      2: '2'
    },

    // width , height
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      ...progressFractionFn(12),
      full: '100%',
      screen: '100vw'
    }),
    height: theme => ({
      0: '0px',
      38: '38px',
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh'
    }),
    zIndex: {
      default: '0',
      1: '1',
      2: '2',
      3: '3'
    },

    // transform
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left'
    },
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5'
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
      45: '45deg',
      90: '90deg',
      180: '180deg'
    },
    translate: {
      '-full': '-100%',
      '-1/2': '-50%',
      '1/2': '50%',
      full: '100%'
    },
    skew: {
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg'
    },
    opacity: {
      0: '0',
      25: '0.25',
      50: '0.5',
      75: '0.75',
      100: '1'
    },

    // transition
    transitionProperty: {
      none: 'none',
      all: 'all',
      default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      'bg-color': 'background-color',
      background: 'background',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform'
    },
    transitionTimingFunction: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    transitionDuration: {
      30: '30ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms'
    },
    transitionDelay: {
      30: '30ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms'
    }
  },
  variants: {
    appearance: []
  },

  // 白名單傳入 [] , 黑名單傳入 {}
  // 白名單 ex: ['margin' , 'padding']
  // 黑名單 ex: { container: false, animation: false}
  corePlugins: {
    container: false
  },

  // 可以自己撰寫 plugins 來擴充 variant utilities components etc...
  // 相關文件參考 https://tailwindcss.com/docs/plugins
  // addUtilities https://tailwindcss.com/docs/plugins#adding-utilities
  // addComponents https://tailwindcss.com/docs/plugins#adding-components
  plugins: [
    plugin(function flexBasisUtil ({ addUtilities }) {
      addUtilities(customFlexBasisUtil, [])
    }),
    plugin(function gridSys ({ addUtilities }) {
      addUtilities(customTypographyUtil, [])
    }),
    plugin(function linearGradient ({ addUtilities }) {
      addUtilities(customGradientUtil, [])
    })
  ]
}
