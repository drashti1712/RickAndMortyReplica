import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import TitleComponent from './TitleComponent'; 
import theme from '../Themes/Theme';

export default function MainComponent() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <TitleComponent />
                <h1>Sample Component</h1>
            </div>
        </ThemeProvider>
    )
}
