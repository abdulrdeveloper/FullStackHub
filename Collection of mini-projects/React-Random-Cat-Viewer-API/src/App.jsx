import { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [show, setShows] = useState({});

  const getData = async () => {
    try {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/cats/cat/random",
      );
      const data = await res.json();
      setShows(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


return (
  <div className="app-container">
    {show.id && (
      <div key={show.id} className="cat-card">
        <img className="cat-img" src={show.image} alt={show.name} />
        <h2 className="cat-name">{show.name}</h2>
        <p className="cat-origin"><span>Origin:</span> {show.origin}</p>
        <p className="cat-temp"><span>Temperament:</span> {show.temperament}</p>
        <p className="cat-desc">{show.description}</p>
        <div className="cat-stats">
          <span>Life Span: {show.life_span}</span>
          <span>Intelligence: {show.intelligence}</span>
          <span>Dog Friendly: {show.dog_friendly}</span>
        </div>
      </div>
    )}
    <button className="premium-btn" onClick={getData}>Get New Cat</button>
  </div>
);
}
export default App;
