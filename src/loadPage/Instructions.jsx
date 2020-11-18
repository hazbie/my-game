import React from 'react';
import Box from '@material-ui/core/Box';
import * as C from './constant';
import './LoadPage.css';

const Instructions = () =>  (
    <Box className="instructions">
        <h3>{C.INSTRUCTIONS}</h3>
        <li>{C.INSTRUCTIONS_1}</li>
        <li>{C.INSTRUCTIONS_2}</li>
        <li>{C.INSTRUCTIONS_3}</li>
        <li>{C.INSTRUCTIONS_4}</li>
        <li>{C.INSTRUCTIONS_5}</li>
        <li>{C.INSTRUCTIONS_6}</li>
        <li>{C.INSTRUCTIONS_7}</li>
        <li>{C.INSTRUCTIONS_8}</li>
        <li>{C.INSTRUCTIONS_9}</li>
        <li>{C.INSTRUCTIONS_10}</li>
    </Box>
)

export default Instructions;
