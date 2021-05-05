import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from 'reducers/Book';

export const Books = () => {
  const bookList = useSelector((store) => store.book.bookList)
  const dispatch = useDispatch();

  const onFetchBooks = (books) => {
    dispatch(fetchBooks(books));
  };

  useEffect(() => {
    onFetchBooks()
  }, [])

  console.log(bookList);

  return (
    <div>
      <h1>HELLO BOOKS</h1>
      {bookList.map((book) => (
        <>
         <p>{book.title}</p>
         <p>{book.title}</p>
        </>
      ))}
    </div>
  )
}
