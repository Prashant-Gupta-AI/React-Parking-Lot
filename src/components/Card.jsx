import React from 'react';
import './styles/cards.css'


function Card({ number, cardName, icon }) {
    return (
        <>
            <div className="card">
                <div>
                    <div className="numbers">{number}</div>
                    <div className="cardName">{cardName}</div>
                </div>
                <div className="iconBx">
                    <ion-icon name={`${icon}-outline`}></ion-icon>
                </div>
            </div>
        </>
    )
}

export default Card