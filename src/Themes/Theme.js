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
  fontFamily: "-apple-system,'BlinkMacSystemFont','Segoe UI','Segoe UI Emoji','Segoe UI Symbol'",
  // textRendering: 'optimizeLegibility',
  lineHeight:'1.1',

  '@media (max-width:600px)': {
    fontSize:'2.5rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize:'3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize:'3.5rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '5.625rem',
  },
};

export default theme;