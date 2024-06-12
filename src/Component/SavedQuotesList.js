
import React from 'react';
import './SavedQuotesList.css';

function SavedQuotesList({ quotes }) {
  return (
    <div className="saved-quotes-list">
      <h2>Saved Quotes</h2>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
    </div>
  );
}

export default SavedQuotesList;
