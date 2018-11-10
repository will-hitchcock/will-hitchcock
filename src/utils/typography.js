import Typography from 'typography'

const typography = new Typography({
  title: 'raleway-montserrat',
  scaleRatio: 3,
  googleFonts: [
    {
      name: 'Raleway',
      styles: [
        '400',
        '700',
      ],
    },
    {
      name: 'Montserrat',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
  headerFontFamily: ['Raleway', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'sans-serif'],
})

export default typography
