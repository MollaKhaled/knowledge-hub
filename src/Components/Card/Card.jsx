import React, { useEffect, useState } from 'react';
import './Card.css'
import ShowCard from '../ShowCard/ShowCard';
import Read from '../Read/Read';


const Card = () => {
  const [cards, setCards] = useState([])
  const [read, setRead] = useState([])

  useEffect(()=>{
    fetch('cards.json')
    .then(res=> res.json())
    .then(data =>setCards(data))
  },[cards])

  const handleAddToCart = (card) => {
    const newRead = [...read,card];
    setRead(newRead);
   }
  
  return (
    <div className='cards-container'>
      <div className="card-container">
        { 
          cards.map(card => <ShowCard
           key = {card.id}
           card ={card}
           handleAddToCart = {handleAddToCart}
         
          ></ShowCard>)
        } 
        
        
       </div>
      <div className="cart-container">
         <Read read={read}></Read>
      </div>
    </div>
   
  );
};

export default Card;