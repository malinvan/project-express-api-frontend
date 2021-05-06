import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from 'reducers/Book';
import { SearchBar } from './SearchBar';
import styled from 'styled-components/macro';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Header = styled.h1`
    color: #DD6E42;
  `;

  const BookContainer = styled.div`
    color: white;
    border: 1px solid #DD6E42;
    width: 50vw;
    margin: 20px 0;
    padding 30px;
  `;

export const Books = () => {
  const bookList = useSelector((store) => store.book.bookList)
  const dispatch = useDispatch();

  const onFetchBooks = () => {
    dispatch(fetchBooks());
  };

  useEffect(() => {
    onFetchBooks()
  }, [])

  return (
    <Container>
      <Header>HELLO BOOKS</Header>
      <SearchBar />
      {bookList.map((book) => (
        <BookContainer key={book.bookID}>
         <p>{book.title}</p>
         <p>{book.authors.split('-')}</p>
         <p>{book.average_rating}/5 from {book.ratings_count.toLocaleString()} votes</p>
         <p>Pages: {book.num_pages}</p>
        </BookContainer>
      ))}
    </Container>
  )
}
