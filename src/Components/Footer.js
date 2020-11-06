/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    root:{
        fontFamily: "'Segoe UI','Segoe UI Emoji','Segoe UI Symbol'",
        backgroundColor:'#202329',
        color:'rgb(158, 158, 158)',
        height:'15rem',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexFlow:'column',
        position:'absolute',
        padding: '4.5rem 0px',
    },
    options:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        listStylePosition:'inside',
        listStyleImage:'none',
        listStyleType:'none'
      },
    list:{
        padding:'10px',
        color: 'rgb(158, 158, 158)',
        fontWeight:'bold',
        fontSize:'14px',
        textDecoration:'none',
        [theme.breakpoints.down(470)]:{
            fontSize:'12px',
            padding:'5px',
        },
        [theme.breakpoints.down(370)]:{
            fontSize:'10px',
            padding:'5px',
        },
        [theme.breakpoints.down(270)]:{
            fontSize:'8px',
            padding:'5px',
        },
    },
    break:{
        height:'50px'
    }
}));

const Footer = () =>{
    const classes = useStyles();
    const IconStyle = {
        display:'inline-block',
        verticalAlign:'middle',
        position:'relative', 
        top:'-2px', 
        fontSize:'0.6rem', 
        color:'rgb(85, 204, 68)'
    };
    
    return(
        <footer className={classes.root}>
            <div className={classes.options}>
                <a href="#" className={classes.list}>CHARACTERS: 671</a>
                <a href="#" className={classes.list}>LOCATIONS: 108</a>
                <a href="#" className={classes.list}>EPISODES: 41 </a>
            </div>
            <div>
                <a href="#" className={classes.list}>SERVER STATUS</a>
                <i style={IconStyle} className="fa fa-circle fa-sm"></i>
            </div>
            <div className={classes.break}>

            </div>
            <div className={classes.options}>
                <a href="#" className={classes.list}><i className="fa fa-github fa-2x"></i></a>
                <a href="#" className={classes.list}><i className="fa fa-twitter fa-2x"></i></a>
                <a href="#" className={classes.list}><i className="fa fa-home fa-2x"></i></a>
            </div>
            <div className={classes.list}>
                Created by- Drashti Modasara
            </div>
        </footer>
    );
}

export default Footer;