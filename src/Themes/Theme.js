import { createMuiTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f5f5f5",
    },
    secondary: {
      main: green[500],
    },
  },
  typography:{
      h1:{
          fontFamily:"Alfa Slab One"
      }
  }
});

export default theme;