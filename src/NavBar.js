import React from 'react';
import './NavBar.css';

const NavBar = ({onNewGame, isFin, attempts, duration}) => {
   if(!isFin){
    return(
        <header>
            <h2><a>Woof Woof Memory Game</a></h2>
            <nav>
                <li><a onClick={onNewGame} className="btn" id="slide">New Game</a></li>
            </nav>
        </header>
       )
   }
   else {
    return(
        <header>
            <h2><a>{attempts} attempts in {duration} sec, Woof!</a></h2>
            <nav>
                <li><a onClick={onNewGame} className="btn" id="slide">New Game</a></li>
            </nav>
        </header>
        )
   }
   
   
   
};



export default NavBar;