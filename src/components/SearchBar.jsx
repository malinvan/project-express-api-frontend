import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { book } from '../reducers/Book';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  padding: 10px;
  background-color: black;
  border: none;
  border-bottom: 2px solid white;
  color: white;
`;

const Button = styled.button`
  border-radius: 50px;
  border: 1px solid #3993DD;
  background-color: #3993DD;
  color: white;
  font-weight: bold;
  padding: 10px;
  width: 50%;
  margin-top: 20px;
`;

export const SearchBar = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch();

  const onSearch = (event) => {
    event.preventDefault()
    setValue(event.target.value);
    dispatch(book.actions.setBookList(value))
  }

  return (
    <Form onSubmit={onSearch}>
      <Input
        type="text"
        placeholder="Search for books"
      ></Input>
      <Button
        onClick={(e) => setValue(e.target.value)}
      >
        Search
      </Button>
    </Form>
  )
}
