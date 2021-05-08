import { createSlice } from '@reduxjs/toolkit';

export const book = createSlice({
  name: 'book',
  initialState: {
    bookList: []
  },
  reducers: {
    setBookList: (store, action) => {
      store.bookList = action.payload;
    }
  }
})

export const fetchBooks = (author) => {

  let queryParams = '';
  if (author) {
    queryParams = `?author=${author}`;
  }

  return (dispatch) => {
    fetch('https://malins-wk17-project.herokuapp.com/books' + queryParams)
      .then(res => res.json()
      .then((books) => {
        dispatch(book.actions.setBookList(books))
      })
    )
  }
}