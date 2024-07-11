import React from 'react';
const Book = ({ title, pages, reviews }) => 
{
  return (
    <div>
      <h2>{title}</h2>
      <p>Pages: {pages}</p>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
};
export default Book;