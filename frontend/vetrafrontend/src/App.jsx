import { useEffect, useState } from "react";
import medusa from "./medusa";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    medusa.products.list()
      .then(({ products }) => {
        setProducts(products);
      })
      .catch(err => {
        console.error("Error loading products:", err);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
