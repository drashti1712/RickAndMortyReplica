import React from 'react'
import TitleComponent from './TitleComponent'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../Theme';

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
