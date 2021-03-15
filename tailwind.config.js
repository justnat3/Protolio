module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        rubine: {
          light: '#CF1259',
          DEFAULT: '#CE125A',
          dark: '#960D42',
        },
        liver: {
          light: '#717484',
          DEFAULT: '#474954',
          dark: '#383A42',
        },
        pnavy: {
          light: '#8688AC',
          DEFAULT: '#54577C',
          dark: '#3A3B55',
        },
        unbleached: {
          light: '#F8E4DD',
          DEFAULT: '#F4D6CC',
          dark: '#EEBCAA',
        },
        sheen: {
          light: '#B3D1CB',
          DEFAULT: '#79AEA3',
          dark: '#365952',
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ['visited'],
    },
  },
  plugins: [],
}
