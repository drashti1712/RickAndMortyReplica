import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import TitleComponent from './TitleComponent'; 
import NavComponent from './NavComponent';
import MiddleComponent from './MiddleComponent';
import Footer from './Footer';
import theme from '../Themes/Theme';

export default function MainComponent() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <NavComponent/>
                <TitleComponent/>
                <MiddleComponent/>
                <Footer/>
            </div>
        </ThemeProvider>
    )
}
