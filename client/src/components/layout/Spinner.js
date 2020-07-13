import React, {Fragment} from 'react';
import spinner from './giphy.gif';

export default () => (
    <Fragment>
        <img 
            src={spinner}
            style={{width: '200px', margin:'auto',display:'block'}}
            alt='Loading.spinner..'
        />
    </Fragment>
)