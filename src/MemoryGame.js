import React, {Component} from 'react';
import NavBar from './NavBar';
import Card from './Card';
import Dog from './Dog';
import './MemoryGame.css';

const CardState = {
    HIDDING: 0,
    SHOWING: 1, 
    MATCHING: 2
}

export default class MemoryGame extends Component {
    constructor(props) {
        super(props);


        //the cards I'm using for my state
        let cards = [
            {id: 0, cardState: CardState.HIDING, backgroundColor: 'red', backgroundImage: ''},
            {id: 1, cardState: CardState.HIDING, backgroundColor: 'red', backgroundImage: ''},
            {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy', backgroundImage: ''},
            {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy', backgroundImage: ''},
            {id: 4, cardState: CardState.HIDING, backgroundColor: 'yellow', backgroundImage: ''},
            {id: 5, cardState: CardState.HIDING, backgroundColor: 'yellow', backgroundImage: ''},
            {id: 6, cardState: CardState.HIDING, backgroundColor: 'green', backgroundImage: ''},
            {id: 7, cardState: CardState.HIDING, backgroundColor: 'green', backgroundImage: ''},
            {id: 8, cardState: CardState.HIDING, backgroundColor: 'black', backgroundImage: ''},
            {id: 9, cardState: CardState.HIDING, backgroundColor: 'black', backgroundImage: ''},
            {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple', backgroundImage: ''},
            {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple', backgroundImage: ''},
            {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink', backgroundImage: ''},
            {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink', backgroundImage: ''},
            {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightsky', backgroundImage: ''},
            {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightsky', backgroundImage: ''}, 
            {id: 16, cardState: CardState.HIDING, backgroundColor: 'brown', backgroundImage: ''},
            {id: 17, cardState: CardState.HIDING, backgroundColor: 'brown', backgroundImage: ''},
            {id: 18, cardState: CardState.HIDING, backgroundColor: 'white', backgroundImage: ''},
            {id: 19, cardState: CardState.HIDING, backgroundColor: 'white', backgroundImage: ''}
        ];

        cards = this.shuffle(cards);

        this.state = {
            cards, noClick: false, isVis: true, isFin: false, width: 0, timestart: undefined, attempts: undefined, duration: undefined, click: 0, isMob: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleNewGame = this.handleNewGame.bind(this);
        this.getAllDogs = this.getAllDogs.bind(this);
        this.shuffle = this.shuffle.bind(this);
        this.updatedWindowDimensions = this.updatedWindowDimensions.bind(this);
        this.mobileCheck = this.mobileCheck.bind(this);
    }

    mobileCheck() {
        if(typeof window.orientation !== 'undefined') {
            this.setState({
                isMob: true
            })
        }
    }
    
    updatedWindowDimensions() {
        if(window.innerWidth < 520) {
            let cards = this.state.cards.filter( c =>
                c.backgroundColor !== "white");
            this.setState({
                cards, width: window.innerWidth
            })
        }
        else if(window.innerWidth > 520 && this.state.cards.length !== 20) {
            let cards = this.state.cards;
            cards.push(
                {id: 18, cardState: CardState.HIDING, backgroundColor: 'white', backgroundImage: ''},
                {id: 19, cardState: CardState.HIDING, backgroundColor: 'white', backgroundImage: ''}
            );
            this.setState({cards, width: window.innerWidth})
        }
    }


    shuffle(arr) {
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;    
    };

    getAllDogs() {
        let dogs = []
        for(let i=0; i<10; i++) {
            fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(res => dogs.push(res.message))
        }
        
    
        setTimeout(
          () => {
            let cards = this.state.cards.map( c => {

                switch(c.backgroundColor) {

                    case "red":
                    return {...c, backgroundImage: dogs[0]};

                    case "navy":
                    return {...c, backgroundImage: dogs[1]};

                    case "yellow":
                    return {...c, backgroundImage: dogs[2]};

                    case "green":
                    return {...c, backgroundImage: dogs[3]};

                    case "black":
                    return {...c, backgroundImage: dogs[4]};

                    case "purple":
                    return {...c, backgroundImage: dogs[5]};

                    case "pink":
                    return {...c, backgroundImage: dogs[6]};

                    case "lightsky":
                    return {...c, backgroundImage: dogs[7]};

                    case "brown":
                    return {...c, backgroundImage: dogs[8]};

                    case "white":
                    return {...c, backgroundImage: dogs[9]};

                    default: 
                    return c;

                }
        })
            this.setState({cards, isVis: false})
          }, 3000
        )
    }

    componentDidMount() {
        this.mobileCheck();
        this.getAllDogs();
        this.updatedWindowDimensions();
        window.addEventListener("resize", this.updatedWindowDimensions);
    }

    handleNewGame() {
        // 1.copy all state and set all cards to state of hiding
        // 2.shuffle the cards
        this.setState({isVis: true})
        setTimeout(() => {
            this.setState({isVis: false})
        }, 3000)
        let cards = this.state.cards.map(c => ({
            ...c,
            cardState: CardState.HIDING
        }));

        cards = this.shuffle(cards);

        this.setState({cards, timestart: undefined, isFin: false, duration: undefined, attempts: undefined, click: 0});

        this.getAllDogs();

    }

    handleClick(id) {
        // console.log(Math.round(new Date().getTime()/1000))
        //adding click
        this.setState((prevState, props) => {
            return {
                click: prevState.click+1
            }
        })
        //adding first clikc timestamp
        if(this.state.click === 1) {
            this.setState({
                timestart: Math.round(new Date().getTime()/1000)
            })
        }
        // 1.if two cards are visible and they don't match, put back
        // 2.if two cards are visible and they match, they should stay

        const mapCardState = (cards, idsToChange, newCardState) => {
            return cards.map(c => {
                if (idsToChange.includes(c.id)) {
                    return {
                        ...c, 
                        cardState: newCardState
                    };
                }
                return c;
            });
        }
        //grabbing the card we want out of the array

        const foundCard = this.state.cards.find(c => c.id === id);

        //prevents flipping card if it's noClick || matching || showing
        if(this.state.noClick || foundCard.cardState !== CardState.HIDING) {
            return;
        }

        let noClick = false;

        //filters all cards, but one that's clicke has SHOWING now
        let cards = mapCardState(this.state.cards, [id], CardState.SHOWING);

        //finds only cards with SHOWING
        const showingCards = cards.filter(c => c.cardState === CardState.SHOWING);
    
        //grabbing ids from showingCards
        const ids = showingCards.map(c => c.id);


        if (showingCards.length === 2 && 
            showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
                cards = mapCardState(this.state.cards, ids, CardState.MATCHING);  
            } 
        else if (showingCards.length === 2) {
           let hidingCards = mapCardState(this.state.cards, ids, CardState.HIDING);
                
            noClick = true;

            this.setState({cards, noClick}, () => {
                setTimeout(() => {
                    // set the state of the cards to HIDING after 1.5 seconds
                    this.setState({cards: hidingCards, noClick: false});
                }, 1200);
            }
            );   
        }
        //check for the game end 
        let allMatching = cards.filter(c => c.cardState === CardState.MATCHING)
        if (allMatching.length === cards.length) {
            let duration = Math.round(new Date().getTime()/1000) - this.state.timestart;
            let attempts = Math.round(this.state.click / 2);
            this.setState({
                duration, attempts, isFin: true
            }, () => {
                console.log(this.state.duration)
                console.log(this.state.attempts)
            })
        }
        this.setState({cards, noClick});
    }


    
    render() {
        var classNames = require('classnames');
        var loadClass = classNames(
            "load",{
                "hide": !this.state.isVis, 
                "show" : this.state.isVis
            }
        )
        var warClass = classNames(
            {
                "hideWar": !this.state.isMob,
                "showWar": this.state.isMob
            }
        )
        const cards = this.state.cards.map((card) => (
            <Card 
                key={card.id} 
                opacity={card.cardState === CardState.MATCHING}
                showing={card.cardState !== CardState.HIDING} 
                backgroundColor={card.backgroundColor} 
                backgroundImage={card.backgroundImage}
                onClick={() => this.handleClick(card.id)}
            />
        ));


        let style = {};
        if (!this.state.isVis) {
            style.display = 'grid'
        }
        else if(this.state.isVis) {
            style.display = 'none'
        }

        return (
            <div className="container">
                <NavBar onNewGame={this.handleNewGame} 
                        isFin={this.state.isFin} 
                        duration={this.state.duration}
                        attempts={this.state.attempts}
                />
                <div className="content">
                <div className="cardsContainer" style={style}>
                {cards}
                </div>
                </div>
                <div className={loadClass}>
                <Dog />
                </div>
                <div className={warClass}>
                    <h2>Turn device in portrait mode! Woof!</h2>
                    <svg height="512pt" viewBox="-18 0 512 512.00048" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m215.402344 418.746094c0 12.636718 10.28125 22.917968 22.917968 22.917968 12.636719 0 22.917969-10.28125 22.917969-22.917968 0-12.640625-10.28125-22.917969-22.917969-22.917969-12.636718 0-22.917968 10.277344-22.917968 22.917969zm30.832031 0c0 4.363281-3.550781 7.914062-7.914063 7.914062-4.367187 0-7.917968-3.550781-7.917968-7.914062 0-4.367188 3.550781-7.917969 7.917968-7.917969 4.363282 0 7.914063 3.550781 7.914063 7.917969zm0 0"/><path d="m318.003906 377.175781c0-5.894531 0-185.167969 0-209.601562 0-6.914063-5.625-12.539063-12.539062-12.539063-5.5625 0-127.847656 0-134.289063 0-6.914062 0-12.539062 5.625-12.539062 12.539063v209.601562c0 8.707031 7.082031 15.789063 15.789062 15.789063h127.785157c8.707031.003906 15.792968-7.082032 15.792968-15.789063zm-15.003906-186.132812h-88.386719v-21.007813h88.386719zm-129.363281-21.003907h25.976562v21.007813h-25.976562zm0 207.136719v-171.132812h129.363281v171.132812c0 .4375-.351562.789063-.789062.789063h-127.785157c-.433593 0-.789062-.351563-.789062-.789063zm0 0"/><path d="m264.882812 131.804688h-53.125c-4.144531 0-7.5 3.359374-7.5 7.503906 0 4.140625 3.355469 7.5 7.5 7.5h53.125c4.144532 0 7.5-3.359375 7.5-7.5 0-4.144532-3.355468-7.503906-7.5-7.503906zm0 0"/><path d="m346.6875 139.628906c0-17.53125-14.261719-31.796875-31.796875-31.796875h-59.070313c-4.144531 0-7.5 3.359375-7.5 7.5 0 4.144531 3.355469 7.5 7.5 7.5h59.070313c9.261719 0 16.796875 7.535157 16.796875 16.796875v116.503906c0 4.140626 3.359375 7.5 7.5 7.5 4.144531 0 7.5-3.359374 7.5-7.5zm0 0"/><path d="m220.816406 107.832031h-59.066406c-17.535156 0-31.800781 14.265625-31.800781 31.796875v289.042969c0 17.535156 14.265625 31.800781 31.800781 31.800781h153.140625c17.535156 0 31.796875-14.265625 31.796875-31.800781v-137.539063c0-4.140624-3.355469-7.5-7.5-7.5-4.140625 0-7.5 3.359376-7.5 7.5v137.539063c0 9.265625-7.535156 16.796875-16.796875 16.796875h-153.140625c-9.265625 0-16.796875-7.53125-16.796875-16.796875v-289.042969c0-9.261718 7.53125-16.796875 16.796875-16.796875h59.066406c4.144532 0 7.503906-3.355469 7.503906-7.5 0-4.140625-3.359374-7.5-7.503906-7.5zm0 0"/><path d="m438.601562 144.320312c-24.277343-37.511718-58.425781-67.386718-98.753906-86.394531-3.746094-1.769531-8.21875-.160156-9.984375 3.585938-1.765625 3.75-.160156 8.21875 3.589844 9.984375 77.910156 36.714844 128.25 116.066406 128.25 202.152344 0 123.15625-100.195313 223.351562-223.351563 223.351562s-223.351562-100.195312-223.351562-223.351562c0-110.792969 80.8125-204.242188 189.324219-220.769532v25.082032c0 6.714843 8.121093 9.988281 12.804687 5.304687l35.226563-35.226563c2.929687-2.929687 2.929687-7.679687 0-10.609374l-35.226563-35.226563c-4.726562-4.722656-12.804687-1.347656-12.804687 5.304687v30.207032c-55.140625 7.886718-105.828125 34.949218-143.335938 76.703125-39.328125 43.78125-60.988281 100.328125-60.988281 159.230469 0 63.667968 24.792969 123.523437 69.8125 168.539062 45.019531 45.019531 104.875 69.8125 168.539062 69.8125 63.667969 0 123.523438-24.792969 168.539063-69.8125 82.105469-82.101562 90.652344-206.785156 31.710937-297.867188zm-219.277343-118.703124 17.117187 17.117187-17.117187 17.121094zm0 0"/></svg>
                </div>
            </div>
        );
    }
}