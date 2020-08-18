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
});

theme.typography.h1 = {
  fontFamily:"Alfa Slab One",
  fontSize: '1.5rem',
  '@media (min-width:600px)': {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4.5rem',
  },
};

export default theme;