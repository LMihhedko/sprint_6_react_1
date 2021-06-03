import logo from './logo.svg';
import './App.css';

import React from "react"
import Book from './book'; 
import bookData from './frases.json'

function App() {
    const BookComponents = bookData.map(phrase => <Book title = {phrase.title} author = {phrase.author}/>)

    return ( 

        <div> 

            {BookComponents}

        </div> 

      );
}

export default App;

