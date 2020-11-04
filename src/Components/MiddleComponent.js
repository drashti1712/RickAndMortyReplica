import React from 'react';
import Typography from '@material-ui/core/Typography';

import RandomEpisode from './SubComponents/RandomEpisode';
import Episodes from './SubComponents/Episodes';
import Characters from './SubComponents/Characters';

class MiddleComponent extends React.Component{
    render(){
        return(
            <div>
                <Typography component="div" style={{ backgroundColor: '#24282f'}}>
                    <RandomEpisode/>
                    <Episodes/>
                    <Characters/>
                </Typography>
            </div>            
        );
    }
}

export default MiddleComponent;