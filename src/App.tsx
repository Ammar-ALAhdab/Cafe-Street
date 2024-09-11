import Hero from "./sections/Hero";
import { useEffect, useState } from "react";
import axios from "./api/axios";
import PopularNow from "./sections/PopularNow";
import Delivery from "./sections/Delivery";
import About from "./sections/About";
import AllProducts from "./sections/AllProducts";
import FilterProducts from "./sections/FilterProducts";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string |null>(null);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get("products");
        const products = response.data;
        setProducts(products);
        // Sort products by popularity in descending order
        const popularProducts = products.sort(
          (a: { popularity: number }, b: { popularity: number }) =>
            b.popularity - a.popularity
        );
        setPopularProducts(popularProducts.slice(0, 3));
      } catch (error) {
        console.error(error);
        setError(error?.message || "error");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const actions = {
    loading,
    error,
  };

  return (
    <main>
      <Hero products={popularProducts[0]} actions={actions} />
      <PopularNow products={popularProducts} actions={actions} />
      <Delivery />
      <About />
      <AllProducts products={products} actions={actions} />
      <FilterProducts products={products} actions={actions} />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default App;
