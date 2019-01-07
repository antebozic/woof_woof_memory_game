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
            <h2><a><span className="results2">{attempts}</span> attempts in <span className="results2">{duration}</span> s, Woof<span className="results1">!</span></a></h2>
            <nav>
                <li><a onClick={onNewGame} className="btn" id="slide">New Game</a></li>
            </nav>
        </header>
        )
   }
   
   
   
};



export default NavBar;