import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Image from '../images/background.png'

const useStyles = makeStyles({
    BoxStyle: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        width:"100%",
        height: "350px",
    },
    TitleStyle:{
        position:"relative",
        top:"130px"
    }
  });

const TitleComponent = () => {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.BoxStyle}>
            {/* <h1 className={classes.TitleStyle}>The Rick and Morty Show</h1>     */}
            <Typography className={classes.TitleStyle} variant="h1" align="center" display="block">
                The Rick and Morty Show
            </Typography>
            </Box>
        </div>
    )
}

export default TitleComponent
