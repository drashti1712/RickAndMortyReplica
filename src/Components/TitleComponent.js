import React from 'react'
import {Grid, Typography, makeStyles} from "@material-ui/core";
import Image from '../Shared/images/background.png'

const useStyles = makeStyles((theme)=>({
    BoxStyle: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"auto 100%",
        backgroundPosition:"center",
        width:"100%",
        height:"350px",
        [theme.breakpoints.between('sm','md')]:{
            height:'500px',
        },
    }
  }));

const TitleComponent = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container direction="row" justify="center" alignItems='center' wrap='wrap' className={classes.BoxStyle}>
                <Grid item>
                    <Typography variant="h1" align='center'>
                        The Rick and Morty Show
                    </Typography>   
                </Grid>
            </Grid>
        </div>
    )
}

export default TitleComponent
