import {createMuiTheme} from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary : {
      light: '#58a5ef',
      main: '#0277bc',
      dark: '#004c8b',
      contrastText: '#ffffff',
    },
    secondary : {
      light: '#ffff72',
      main: '#ffeb3b',
      dark: '#c8b900',
      contrastText: '#000000',
    },
    type: 'dark'
  }
})
