import React from 'react';
import Book from './Book';
const BookList = () => 
{
  const books =
  [
    {
      title: 'Маніфест Унабомбера',
      pages: 100,
      reviews: ['Найкращі ідеї які були представлені на папері Теодор був правий. Прочитати книгу - зобовязання кожного свідомого громадянина, тож читайте та готуйте революцію!', 'Книжка шикарна, заставляє замислитися над природою суспільства і наслідками його впливу на індивіда. Місцями дещо перебільшено, однак в цілому дуже влучно.']
    }
  ];
  return (
    <div>
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          pages={book.pages}
          reviews={book.reviews}
        />
      ))}
    </div>
  );
};
export default BookList;