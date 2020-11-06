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
        flexFlow:'column nowrap',
        position:'relative',
        padding: '4.5rem 0px',
    },
    options:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        listStylePosition:'outside',
        listStyleImage:'none',
        listStyleType:'none',
      },
    list:{
        padding:'10px',
        color: 'rgb(158, 158, 158)',
        fontWeight:'bold',
        fontSize:'14px',
        wordWrap:'break-word',
        textDecoration:'none',
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
            <ul className={classes.options}>
                <li><a href="#" className={classes.list}>CHARACTERS: 671</a></li>
                <li><a href="#" className={classes.list}>LOCATIONS: 108</a></li>
                <li><a href="#" className={classes.list}>EPISODES: 41</a></li>
            </ul>
            <span>
                <a href="#" className={classes.list}>SERVER STATUS</a>
                <i style={IconStyle} className="fa fa-circle fa-sm"></i>
            </span>
            <div className={classes.break}>

            </div>
            <ul  style={{marginLeft:'-35px'}} className={classes.options}>
                <li><a href="#" className={classes.list}><i className="fa fa-github fa-2x"></i></a></li>
                <li><a href="#" className={classes.list}><i className="fa fa-twitter fa-2x"></i></a></li>
                <li><a href="#" className={classes.list}><i className="fa fa-home fa-2x"></i></a></li>
            </ul>
            <span className={classes.list}>
                App created by Drashti Modasara
            </span>
        </footer>
    );
}

export default Footer;