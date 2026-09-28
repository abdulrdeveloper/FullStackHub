import { useEffect, useState } from "react";

function App() {
  const [joke, setJoke] = useState(null);

  const getData = async () => {
    
    try {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/randomjokes/joke/random",
      );
      const data = await res.json();
      const randomJoke = data.data;
      setJoke(randomJoke);
    }
    catch (error) {
      console.log(error);
    }
    
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">Random Joke</h1>
  {joke && (
      <div className="jokes-grid">
          <div key={joke.id} className="joke-card">
            <p className="joke-text">{joke.content}</p>
            <p className="joke-categories">
              {joke.categories?.[0] || 'General'}
            </p>
          </div>
      </div>
)}
      <button className="refresh-button" onClick={getData}>
        Get Another Joke
      </button>
    </div>
  );
}

export default App;
