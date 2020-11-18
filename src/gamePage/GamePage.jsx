import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import GameOver from './GameOver';
import logout from '../image/logout.png';
import cardBack from '../image/cardBack.png';
import tenHeard from '../image/tenHeard.png';
import tenMatch from '../image/tenMatch.png';
import tenSpathi from '../image/tenSpathi.png';
import jocker from '../image/jocker.jpg';
import './GamePage.css'

const GamePage = () => {
    const [budget, setBudget] = useState (50);

    const plusBudget = () => {
        setBudget (budget + 15)
    }

    const minusBudget = () => {
        setBudget (budget - 10)
    }
    
    return (
        <>
            <Button className="end" href="/" >
                <img src={logout} alt='logout' width='50' /> 
            </Button>
            <div className="title">
                <h3>Budget: {budget}$</h3>
                {budget === 20 || budget === 15 ?
                    <Alert variant="outlined" severity="warning" className="alerts">
                        The game end if you find the joker again
                    </Alert>
                : null
                }
            </div>
            <table>
                {budget > 10 ?
                <tr>
                    <div className="title">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => minusBudget()} 
                        > 
                            Click to play 
                        </Button>
                    </div>
                    <Button disabled={budget === 50}>
                        <td >
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div onMouseEnter={() => plusBudget()} >
                                        <div class="flip-card-front">
                                            <img src={cardBack} alt="Avatar" width="200"/>
                                        </div>
                                        <div class="flip-card-back">
                                            <img src={tenHeard} alt="tenHeard" width="200" />
                                            <h4>+10$</h4>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </td>
                
                        <td>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div onMouseEnter={() => plusBudget()} >
                                        <div class="flip-card-front">
                                            <img src={cardBack} alt="Avatar" width="200"/>
                                        </div>
                                        <div class="flip-card-back">
                                            <img src={tenMatch} alt="tenHeard" width="200" />
                                            <h4>+10$</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div onMouseEnter={() => minusBudget()} >
                                        <div class="flip-card-front">
                                            <img src={cardBack} alt="Avatar" width="200"/>
                                        </div>
                                        <div class="flip-card-back">
                                            <img src={jocker} alt="tenHeard" width="200" />
                                            <h4>-20$</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div class="flip-card" disabled={budget<=20}>
                                <div class="flip-card-inner" disabled={budget<=20}>
                                    <div onMouseEnter={() => plusBudget()} disabled={budget<=20} >
                                        <div class="flip-card-front" disabled={budget<=20}>
                                            <img src={cardBack} alt="Avatar" width="200" disabled={budget<=20}/>
                                        </div>
                                        <div class="flip-card-back" disabled={budget<=20}>
                                            <img src={tenSpathi} alt="tenHeard" width="200" disabled={budget<=20} />
                                            <h4>+10$</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </Button>
                </tr>
                : 
                <GameOver />
                }
            </table>
        </>
    )
}

export default GamePage;
