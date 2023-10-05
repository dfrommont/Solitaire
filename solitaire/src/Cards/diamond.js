import React, { useState, useEffect } from 'react';

import diamond from './../assets/diamond.png'

const cardStyle = {
    backgroundColor: "var(--Burgundy)",
    width: "10vw",
    height: "23vh"
}

const Card = (props) => {
    
    const [frontVisible, setfrontVisible] = useState("none");
    const [backVisible, setbackVisible] = useState("block");

    function swapToFront() {
        setfrontVisible("block");
        setbackVisible("none");
        console.log("changed")
    }

    return (
        <>
            <div className='conatiner rounded-3' id='card' style={cardStyle}>
                <button className='btn' id={`${props.id}-card-front`} style={{display: frontVisible}}>
                    <p className='h3 text-light text-start'>{props.number}</p>
                    <img src={diamond} style={{width: "100%"}} />
                    <p className='h3 text-light text-end'>{props.number}</p>
                </button>
                <button className='btn' id={`${props.id}-card-back`} style={{display: backVisible, width: "10vw", height: "23vh"}} onClick={() => swapToFront()}>
                    <p className='h3 text-light text-center'>Solitaire</p>
                </button>
            </div>
        </>
    )
}

export default Card;