import React from 'react';
import { Grid, Typography, makeStyles} from '@material-ui/core';
import EpisodeCard from '../CardComponents/EpisodeCard';

const useStyles = makeStyles((theme) => ({
    root: {
      fontFamily: "'Segoe UI','Segoe UI Emoji','Segoe UI Symbol'",
      color: 'white',
      flexGrow: 1,
      marginTop:'1rem',
    },
}));
const Episodes = () => {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h4" component="h4">
                Episodes
            </Typography>
            <Grid container className={classes.root} spacing={4}>
                <EpisodeCard/>
                <EpisodeCard/>
            </Grid>
        </div>
    )
    
}
export default Episodes;
