import './App.css';
import React from 'react';
import 'font-awesome/css/font-awesome.css';

function App() {
  return (
    <nav class='navbar navbar-fixed-top' role='navigation'>
      <div class='container'>
        <div class='navbar-header'>
          <button
            type='button'
            class='navbar-toggle'
            data-toggle='collapse'
            data-target='#navbar-collapse'
          >
            <span
              class='glyphicon glyphicon-menu-hamburger'
              aria-hidden='true'
            ></span>
            <span class='sr-only'>Toggle navigation</span>
            <span class='icon-bar'></span>
            <span class='icon-bar'></span>
            <span class='icon-bar'></span>
          </button>

          <a class='navbar-brand' href='#'></a>
        </div>

        <div class='collapse navbar-collapse' id='navbar-collapse'>
          <ul class='nav navbar-nav navbar-right'>
            <li>
              <a href=''>Browse</a>
            </li>
            <li>
              <a href=''>Learn</a>
            </li>
            <li>
              <a href=''>Create</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;
