import React, { useState, useEffect } from 'react';
import QuoteCard from './Component/QuoteCard';
import SavedQuotesList from './Component/SavedQuotesList';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const data = await response.json();
    setQuote(data[0]);
  };

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <h1>Ron Swanson Quotes</h1>
      <QuoteCard quote={quote} onFetchNewQuote={fetchQuote} onSaveQuote={saveQuote} />
      <SavedQuotesList quotes={savedQuotes} />
    </div>
  );
}

export default App;
