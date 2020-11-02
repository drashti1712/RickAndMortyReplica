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
        height:"240px",
        // [theme.breakpoints.between('sm','md')]:{
        //     height:'300px',
        // },
    },
    h1class: {
        margin:"0px",
        color:"rgb(32,35,41)",
        border:"medium none",
        fontWeight:'900',
        zIndex:"1",
    }
  }));

const TitleComponent = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container direction="row" justify="center" alignItems='center' wrap='wrap' className={classes.BoxStyle}>
                <Grid item>
                    <Typography variant="h1" align='center'className={classes.h1class}>
                        The Rick and Morty Show
                    </Typography>   
                </Grid>
            </Grid>
        </div>
    )
}

export default TitleComponent
