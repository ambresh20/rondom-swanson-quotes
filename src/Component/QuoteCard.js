import React from 'react';
import './QuoteCard.css';

function QuoteCard({ quote, onFetchNewQuote, onSaveQuote }) {
  return (
    <div className="quote-card">
      <p>{quote}</p>
      <div className="quote-card-buttons">
        <button className='button-box' onClick={onFetchNewQuote}>New Quote</button>
        <button className='button-box' onClick={onSaveQuote}>Save Quote</button>
      </div>
    </div>
  );
}

export default QuoteCard;


