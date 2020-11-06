import React from 'react'
import {Grid, makeStyles, Paper} from "@material-ui/core";
// import { render } from '@testing-library/react';

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         height: 250,
//         width: 200,
//         backgroundColor:"#3c3e44"
//     },
// }));

class EpisodeCard extends React.Component {
    // const classes = useStyles();
    
    render(){
        // const classes = useStyles();
        const style = {
            height: 250,
            width: 200,
            backgroundColor:"#3c3e44"
        };
        return(
            <Grid item xs={12}>
                <Grid container justify="center" spacing={4}>
                    {[0, 1, 2, 3, 4].map((value) => (
                        <Grid key={value} item>
                            <Paper stlye={style}>
                                
                            </Paper>
                        </Grid> 
                    ))}
                </Grid>
            </Grid>
        );
    }
}

export default EpisodeCard;