import React, {useEffect, useContext, useState} from 'react';
import './styles/cards.css';
import Card from './Card';
import recordContext from './context/recordContext';

function Cards() {

  const first = useContext(recordContext);
  const [earnings, setEarnings] = useState(0)
  
  useEffect(() => {
    first.records.map((record) => {
      setEarnings(earnings +  parseInt(record.payment, 10))
    })
  }, [first.records])
  
  return (
    <>
    <div className="cardBox">
        <Card number="500" cardName="Parking Spots" icon="Car"/>
        <Card number={500- first.records.length} cardName="Available" icon="location"/>
        <Card number={first.records.length} cardName="Waiting" icon="hand-left"/>
        <Card number={earnings} cardName="Earnings" icon="cash"/>
    </div>
    </>
  )
}

export default Cards;