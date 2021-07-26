import React, { useState } from 'react';

const Flashcard = (props) => {
  const [flip, setFlip] = useState(false);

  return (
    <div className='container'>
      <div className='row' id='midrow'>
        <div
          className={`flip-container ${flip ? 'flipped' : ''}`}
          id='flashcard'
          onClick={() => setFlip(!flip)}
        >
          <div className='flipper'>
            <div className='front'>
              <span id='flashcard--content_en'>{props.name}</span>
            </div>
            <div className='back'>
              <span id='flashcard--content_es' className='font-back'>
                {props.meaning}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
