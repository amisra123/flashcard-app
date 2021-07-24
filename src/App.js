import './App.css';
import React, { Fragment } from 'react';
import 'font-awesome/css/font-awesome.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <section class='grid-1'>
        <div class='container'>
          <div class='row' id='midrow'>
            <div class='flip-container' id='flashcard'>
              <div class='flipper'>
                <div class='front'>
                  <span id='flashcard--content_en'>almonds</span>
                </div>
                <div class='back'>
                  <span id='flashcard--content_es'>almendras</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='container'>
          <div class='row' id='midrow'>
            <div class='flip-container' id='flashcard'>
              <div class='flipper'>
                <div class='front'>
                  <span id='flashcard--content_en'>almonds</span>
                </div>
                <div class='back'>
                  <span id='flashcard--content_es'>almendras</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='container'>
          <div class='row' id='midrow'>
            <div class='flip-container' id='flashcard'>
              <div class='flipper'>
                <div class='front'>
                  <span id='flashcard--content_en'>almonds</span>
                </div>
                <div class='back'>
                  <span id='flashcard--content_es'>almendras</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='container'>
          <div class='row' id='midrow'>
            <div class='flip-container' id='flashcard'>
              <div class='flipper'>
                <div class='front'>
                  <span id='flashcard--content_en'>almonds</span>
                </div>
                <div class='back'>
                  <span id='flashcard--content_es'>almendras</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
