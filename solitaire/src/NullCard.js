import React from 'react';

const NullCard = (props) => {
    return (
        <>
            <div className='container rounded-3' id='card' style={{backgroundColor: "var(--Burgundy)", width: "8vw", height: "23vh", zIndex: props.z, border: "1px solid #000"}}>
                <div className='container' id={'null'} style={{width: "10vw", height: "23vh"}}>
                    <p className='h3 text-light text-center'>Solitaire</p>
                </div>
            </div>
        </>
    )
}

export default NullCard;