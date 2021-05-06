import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { fetchBooks } from 'reducers/Book';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const Input = styled.input`
  padding: 10px;
  background-color: black;
  border: none;
  border-bottom: 2px solid white;
  width: 300px;
  ::placeholder {
    color: #e7e9eb;
  }
  :focus {
    outline: none;
    background-color: #2c2d26;
    color: white;
    ::placeholder {
      color: white;
    }
  }
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

  const search = (e) => {
    e.preventDefault();
    dispatch(fetchBooks(value));
  }

  return (
    <Form onSubmit={search}>
      <Input
        type="text"
        placeholder="Search for books"
        onChange={e => setValue(e.target.value)}
      ></Input>
      <Button
        onClick={search}
      >
        Search
      </Button>
    </Form>
  )
}
