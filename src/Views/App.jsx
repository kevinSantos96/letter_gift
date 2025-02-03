import React from 'react'
import { useState } from 'react'
import CardView from './CardView';
import { GiftView } from './GiftView';

function App() {
    const [currentScreen, setCurrentScreen] = useState('Card');

   // const goToCardView =()=> setCurrentScreen('Card')
    const goToGiftView =()=> setCurrentScreen('Gift')

  return (
    <div>
        {
            currentScreen==='Card'?(<CardView goToGiftView={goToGiftView} />):(<GiftView />)
        }
    </div>
  )
}

export default App