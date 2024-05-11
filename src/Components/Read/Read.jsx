import React from 'react';
import './Read.css';

const Read = ({ read }) => {
  let totalReadTime = 0;
  for (const item of read) {
      totalReadTime =totalReadTime + parseInt(item.readTime);
      
    }

  let totalBookMarked = 0;
    for (const item of read) {
      totalBookMarked =totalBookMarked + parseInt(item.quantity);
      
    }
    
  return (
    <div className='read'>
      <p>Read time: {totalReadTime} min</p>
      <p>Bookmarked Blogs: {totalBookMarked}</p>
      
    </div>
  );
};

export default Read;
