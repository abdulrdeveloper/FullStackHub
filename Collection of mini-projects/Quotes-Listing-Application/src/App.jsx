import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    try {
      const res = await fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random");
      const data = await res.json();
      setQuotes(data.data);
    } 
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">Quotes Listening App</h1>
      {quotes && (
        <div className="quote-card">
          <p className="quote-content">"{quotes.content}"</p>
          <p className="quote-author">- {quotes.author}</p>
        </div>
      )}
      <button className="generate-btn" onClick={fetchQuotes}>Get Next Quote</button>
    </div>
  );
}

export default App;
