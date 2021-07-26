import './App.css';
import React, { Fragment } from 'react';
//import 'font-awesome/css/font-awesome.css';
import Navigation from './components/Navigation';
import Flashcard from './components/Flashcard';
import data from './components/data/data.json';

function createFlashCard(flashcard) {
  return (
    <Flashcard
      key={flashcard.id}
      name={flashcard.name}
      meaning={flashcard.meaning}
    />
  );
}

function App() {
  return (
    <Fragment>
      <Navigation />
      <section class='grid-1'>{data.map(createFlashCard)}</section>
    </Fragment>
  );
}

export default App;
