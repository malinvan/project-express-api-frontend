import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from 'reducers/Book';
import { SearchBar } from './SearchBar';
import styled from 'styled-components';

export const Books = () => {
  const bookList = useSelector((store) => store.book.bookList)
  const dispatch = useDispatch();

  const onFetchBooks = (books) => {
    dispatch(fetchBooks(books));
  };

  useEffect(() => {
    onFetchBooks()
  }, [])

  const Container = styled.div`

  `;

  const Header = styled.h1`
    color: #DD6E42;
  `;

  const BookContainer = styled.div`
    color: white;
    border: 1px solid #DD6E42;
    width: 50vw;
    margin: 0 auto;
    margin-bottom: 20px;
    padding 30px;
  `;

  return (
    <Container>
      <Header>HELLO BOOKS</Header>
      <SearchBar />
      {bookList.map((book) => (
        <BookContainer>
         <p>{book.title}</p>
         <p>{book.authors.split('-')}</p>
         <p>{book.average_rating}/5 from {book.ratings_count} votes</p>
         <p>Pages: {book.num_pages}</p>
        </BookContainer>
      ))}
    </Container>
  )
}
