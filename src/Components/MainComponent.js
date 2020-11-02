import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import TitleComponent from './TitleComponent'; 
import NavComponent from './NavComponent';
import Footer from './Footer';
import theme from '../Themes/Theme';

export default function MainComponent() {
    const style={
        backgroundColor:'black',
        color:'white',
        height:'10rem',
    };
    return (
        <ThemeProvider theme={theme}>
            <div>
                <NavComponent/>
                <TitleComponent />
                <div style={style}>Sample Component</div>
                <Footer/>
            </div>
        </ThemeProvider>
    )
}
