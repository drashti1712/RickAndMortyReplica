import { createMuiTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
// import white from '@material-ui/core/colors/white';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f5f5f5",
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

theme.typography.h1 = {
  fontFamily: "-apple-system,'BlinkMacSystemFont','Segoe UI','Segoe UI Emoji','Segoe UI Symbol'",
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

theme.typography.h4 = {
  marginLeft:'3.5rem',
  fontFamily:'Dosis',
  fontSize:'2rem'
};

export default theme;