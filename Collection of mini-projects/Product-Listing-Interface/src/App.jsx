import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [Items, setItems] = useState([]);

  const fetchTechProducts = async () => {
    try {
      const randomId = Math.floor(Math.random() * 195) + 1;
      const res = await fetch(`https://dummyjson.com/products/${randomId}`);
      const data = await res.json();
      setItems([data]);
      console.log(data);
    }
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTechProducts();
  }, []);

  const product = Items[0];

  return (
    <div className="app-container">
      <h1 className="app-title">Product Explorer</h1>
      {product && (
        <div className="product-card">
          <div className="img-wrapper">
            <img className="product-image" src={product.thumbnail} alt={product.title} />
          </div>
          <div className="product-content">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <div className="price-tag">${product.price}</div>
          </div>
          <div className="product-tags">
            <span className="tag">{product.weight ? `${product.weight}kg` : "No Weight"}</span>
            <span className="tag">{product.warrantyInformation ? product.warrantyInformation : "No Warranty"}</span>
            <span className="tag tag-rating">⭐ {product.rating ? product.rating : "N/A"}</span>
          </div>
        </div>
      )}
      <button className="btn-primary" onClick={fetchTechProducts}>
        Next Product
      </button>
    </div>
  );
}

export default App;