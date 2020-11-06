import React from 'react'
import {Grid, Typography, makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        height: 250,
        width: 200,
        backgroundColor:"#3c3e44"
    },
}));

const EpisodeCard = () => {
    const classes = useStyles();
    return(
        <Grid item xs={12}>
            <Grid container justify="center" spacing={4}>
                {[0, 1, 2, 3, 4].map((value) => (
                    <Grid key={value} item>
                        <Paper className={classes.paper}>
                            
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );

}

export default EpisodeCard;