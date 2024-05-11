import React from 'react';
import './Read.css';

const Read = ({ read }) => {
  let totalReadTime = 0;
  for (const item of read) {
    totalReadTime = totalReadTime + item.readTime;

  }

  let totalBookMarked = 0;
  for (const item of read) {
    totalBookMarked = totalBookMarked + item.quantity;

  }

  let totalBio = '';
  for (const item of read) {
    totalBio = totalBio + item.bio + '\n';

  }


  return (
    <div className='read'>
      <p>Read time: {totalReadTime} min</p>
      <p>Bookmarked Blogs: {totalBookMarked}min</p>
      <p>Title:<br/> {totalBio}</p> 

    </div>
  );
};

export default Read;
