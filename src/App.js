import React from 'react'
import { Provider } from "react-redux";
import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { book } from "./reducers/Book";
import { Books } from './components/Books'

const reducer = combineReducers({
  book: book.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={ store }>
      <Books />
    </Provider>
  )
}
