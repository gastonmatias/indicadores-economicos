import { createTheme } from "@mui/material";
import { grey, red, teal } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette:{
      mode: 'light',
      background: {
        default: grey[300]
        // default: '#263238'
      },
      primary:{
        main: '#000a12', // negro
        light: '#424242', // gris 
        // main: teal[900]
        // main: '#121858',
        // main: '#001970' // indigo
        // main: '#263238', // gris
      },
      secondary:{
        main: '#263238', // gris azulado
        light: '#263238', // gris
        // main: '#303f9f',// indigo
        // main: '#1a237e',
        // main: '#1a237e',
      },
      error:{
        main: red.A400
      },
    },
    typography:{
      // fontFamily: 'Crimson Text',
      fontFamily: 'Open Sans',
      // fontFamily: 'Bebas Neue',
      // fontFamily: 'Lobster Two',
    },

    components:{
      MuiDrawer:{
        // defaultProps:{
        //   elevation: 0
        // },

        // styleOverrides:{
         
        //   root:{
        //     backgroundColor: teal[100]
        //   }
        // }
      }        
    }

  })
  