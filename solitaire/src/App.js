import React, { useEffect } from 'react';
import './App.css';
import deals from './Deals';

const App = () => {

  let cards = deals[0]

  document.addEventListener("click", (event) => {
    ///console.log(cards[5][cards[5].length-1].card.props)
    ///cards[5][cards[5].length-1].card = React.cloneElement(cards[5][cards[5].length-1].card, {clickable: false})
    ///console.log(cards[5][cards[5].length-1].card.props)
    for (let i = 5; i < 12; i++) {
      console.log(cards[i][cards[i].length-1].card)
      cards[i][cards[i].length-1].card = React.cloneElement(cards[i][cards[i].length-1].card, {clickable: true})
      console.log(cards[i][cards[i].length-1].card)
    }
    console.log(cards)
  })

  useEffect(() => {

    console.log("loading cards into game deck")
  })

  return (
    <>
      <div className='container-fluid w-100 h-100'>
        <h1>solitaire</h1>
        <div className='row'>
          <div className='col-auto m-4' style={{width: "10vw", height: "23vh"}}>
            {cards[0][cards[0].length-1].card}
          </div>
          <div className='col-auto m-4' style={{width: "10vw", height: "23vh"}}>
            {cards[1][cards[0].length-1].card}
          </div>
          <div className='col-auto m-4' style={{width: "10vw", height: "23vh"}}>
            {cards[2][cards[0].length-1].card}
          </div>
          <div className='col-auto m-4' style={{width: "10vw", height: "23vh"}}>
            {cards[3][cards[0].length-1].card}
          </div>
        </div>
        <div className='row' style={{marginTop: "13vh"}}>
          <div className='col'>
            {cards[5].map((card) => (
              <>{card.card}</>
            ))}
          </div>
          <div className='col'>
            {cards[6].map((card) => (
              <>{card.card}</>
            ))}
          </div>
          <div className='col'>
            {cards[7].map((card) => (
              <>{card.card}</>
            ))}
          </div>
          <div className='col'>
            {cards[8].map((card) => (
              <>{card.card}</>
            ))}
          </div>
          <div className='col'>
            {cards[9].map((card) => (
              <>{card.card}</>
            ))}
          </div>
          <div className='col'>
            {cards[10].map((card) => (
              <>{card.card}</>
            ))}
          </div>
          <div className='col'>
            {cards[11].map((card) => (
              <>{card.card}</>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
