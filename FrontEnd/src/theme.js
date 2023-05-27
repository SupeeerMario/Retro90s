import{ createTheme } from '@mui/material/styles';
 export const shades={

primary: {
    100:"#cccccc",
    200:"#999999",
    300:"#666666",
    400:"#333333",
    500:"#000000",

},
secondary: {
    100: "#f7ccd2",
    200: "#ef99a4",
    300: "#e66677",
    400: "#de3349",
    500: "#d6001c",
    600: "#ab0016",
    700: "#800011",
    800: "#56000b",
    900: "#2b0006"
},
neutral: {
          100: "#ebebeb",
          200: "#d7d7d7",
          300: "#c3c3c3",
          400: "#afafaf",
          500: "#9b9b9b",
          600: "#7c7c7c",
          700: "#5d5d5d",
          800: "#3e3e3e",
          900: "#1f1f1f"
},
black: {
    100: "#ccccec",
    200: "#9a99d8",
    300: "#6766c5",
    400: "#3533b1",
    500: "#02009e",
    600: "#02007e",
    700: "#01005f",
    800: "#01003f",
    900: "#000020"
},
 };
 export const theme = createTheme({

palette:{
    primary:{
        main : shades.primary[500]
    },
    secondary:{
        main:shades.secondary[500]
    },
    neutral:{
        dark: shades.neutral[700],
        main: shades.neutral[500],
        light: shades.neutral[100]
    }
  },
typography:{
    fontFamily:["Tajawal","sans-serif"].join(","),
    fontSize:11,
    h1:{
        fontFamily:["Bebas Neue","sans-serif"].join(","),
    fontSize:48,
    },
    h2:{
        fontFamily:["Bebas Neue","sans-serif"].join(","),
    fontSize:36,
    },
     h3:{
        fontFamily:["Bebas Neue","sans-serif"].join(","),
    fontSize:20,
    },
    h4:{
        fontFamily:["Bebas Neue","sans-serif"].join(","),
    fontSize:14,
    },
}


})