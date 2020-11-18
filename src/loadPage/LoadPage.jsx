import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Instructions from './Instructions';
import * as C from './constant';
import './LoadPage.css';

const LoadPage = () => {
    const [state, setState] = useState({
        name:'',
    })

    const handleSubmit = async event => {
        event.preventDefault();
    }

    const handleChange = name => event => {
        const value = event.target.value;
        setState({ ...state, [name]: value,});
    };

    return (
        <>
            <Box className="wellcome">
                <h1>{C.WELLCOME}</h1>
                <span>{C.DESCRIPTION}</span>
            </Box>
            <div className="textfiled">
                <input style={{ margin: 8 }}
                    placeholder="Enter your name"
                    name='name' 
                    value={state.name} 
                    onChange={handleChange('name')} required
                />
                <Button 
                    disabled={!state.name }
                    variant="contained"
                    color="primary"
                    onSubmit={handleSubmit}
                    href="play-game"
                >
                    Play
                </Button>
            </div>
            <Instructions />
        </>
    )
}

export default LoadPage;
