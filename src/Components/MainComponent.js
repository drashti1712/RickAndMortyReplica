import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import TitleComponent from './TitleComponent'; 
import NavComponent from './NavComponent';
import theme from '../Themes/Theme';

export default function MainComponent() {
    const style={
        backgroundColor:'black',
        color:'white',
    };
    return (
        <ThemeProvider theme={theme}>
            <div>
                <NavComponent/>
                <TitleComponent />
                <h1 style={style}>Sample Component</h1>
            </div>
        </ThemeProvider>
    )
}
