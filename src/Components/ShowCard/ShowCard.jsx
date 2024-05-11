import React from 'react';
import './ShowCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'


const ShowCard = (props) => {
 
  const { id, name, title, bio, imageUrl, readTime, socialLinks } = props.card;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div>
      
      <div className="card w-196 bg-base-100 shadow-xl ">
      
        <img className='main-img' src={imageUrl} alt="" />
        <div className="title-name-header">
          <img className='pro-pic' src={imageUrl} alt="" />
          <div>
          <h2 className='name text-lg'>Name: {name}</h2>
          <p className='text-sm'>March 14 (4 Days ago)</p>
          </div>
          <div className='read-time text-lg'> {readTime} min read
          </div>
          <button onClick={() => handleAddToCart(props.card)}><FontAwesomeIcon icon={faBookmark} /></button>
        </div>
        <div className="card-body">
        <h3 className='text-xl'>ID:{id}</h3>
          
          <h5 className='text-lg'>Title: {title}</h5>
          <p>Description: {bio}</p>
         {/* <p className='mark text-xl'>Mark as read</p> */}
         <button onClick={() => handleAddToCart(props.card)}>Mark As read</button>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;