import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core';
import Image from '../../Shared/images/1.png'

const useStyles = makeStyles((theme) => ({
    root: {
      fontFamily: "'Segoe UI','Segoe UI Emoji','Segoe UI Symbol'",
      color: 'white',
      marginTop:'0px',
      paddingTop:'3rem'
    },
    BoxStyle:{
        height:'50vh',
        margin:'1.25rem 3rem 1.25rem 3rem',
        border:'5px',
        borderRadius:'20px',
        cursor:'pointer',
        backgroundImage: `url(${Image})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center",
        [theme.breakpoints.between('xs','md')]:{
            margin:'1rem 1.5rem 1rem 1.5rem',
            height:'15rem',
        },
    }
}));

const RandomEpisode = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h4" component="h4">
                Watch a Random Episode
            </Typography>
            <Box component="div" className={classes.BoxStyle}>
                <Typography variant="h6" color='secondary' m={2}>
                    show here
                </Typography>
            </Box>
        </div>
    )
}

export default RandomEpisode;
