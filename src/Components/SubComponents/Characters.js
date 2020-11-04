import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      fontFamily: "'Segoe UI','Segoe UI Emoji','Segoe UI Symbol'",
      color: 'white',
    //   margin:'1rem',
    },
}));
const Characters = () => {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h4" component="h4">
                Characters
            </Typography>
        </div>
    )
    
}
export default Characters;
