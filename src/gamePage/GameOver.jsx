import React from 'react';
import Button from '@material-ui/core/Button';
import './GamePage.css'

const GameOver = () => (
    <>
        <h1 className="title" style={{ margin: 90 }}>Game Over</h1> 
        <Button
            variant="contained"
            color="primary"
            href="play-game"
        >
            Play again
        </Button>
    </>
)

export default GameOver;
