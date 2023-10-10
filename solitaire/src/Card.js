import React, { useState } from 'react';

import diamond from './assets/diamond.png';
import spade from './assets/spade.png';
import club from './assets/club.png';
import heart from './assets/heart.png'

const Card = (props) => {
    
    const [frontVisible, setfrontVisible] = useState("none");
    const [backVisible, setbackVisible] = useState("block");
    const [canClick, setCanClick] = useState(props.clickable)

    let img = diamond;
    if (props.suit === "diamond") {
        img = diamond;
    } else if(props.suit === "spade") {
        img = spade;
    } else if (props.suit === "club") {
        img = club;
    } else {
        img = heart;
    }

    function swapToFront() {
        if (canClick) {
            setfrontVisible("block");
            setbackVisible("none");
        }
    }

    return (
        <>
            <div className='container rounded-3' id='card' style={{backgroundColor: "var(--Burgundy)", width: "8vw", height: "23vh", zIndex: props.z, marginTop: "-13vh", border: "1px solid #000"}}>
                <button className='btn' id={`${props.id}-card-front`} style={{display: frontVisible}}>
                    <p className='h3 text-light text-start'>{props.number}</p>
                    <img src={img} style={{width: "100%"}} alt={props.suit} />
                    <p className='h3 text-light text-end'>{props.number}</p>
                </button>
                <button className='btn' id={`${props.id}-card-back`} style={{display: backVisible, width: "10vw", height: "23vh"}} onClick={() => swapToFront()}>
                    <p className='h4 text-light text-center'>Solitaire</p>
                </button>
            </div>
        </>
    )
}

export default Card;