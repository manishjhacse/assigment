import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const cache = {};

const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const loadData = async () => {
      setLoading(true);
      setProducts([]);
      setError(null);

      try {
        if (cache[url]) {
          console.log("Serving from memory cache:", url);
          setProducts(cache[url].products);
          setTotal(cache[url].total);
          setLoading(false);
          return;
        }

        const cached = localStorage.getItem(url);
        if (cached) {
          console.log("Serving from localStorage:", url);
          const parsed = JSON.parse(cached);
          cache[url] = parsed; 
          setProducts(parsed.products);
          setTotal(parsed.total);
          setLoading(false);
          return;
        }

        const res = await fetchDataFromApi(url);

        const formatted = {
          products: res?.products || [],
          total: res?.total || 0,
        };

        cache[url] = formatted;
        localStorage.setItem(url, JSON.stringify(formatted));

        setProducts(formatted.products);
        setTotal(formatted.total);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [url]);

  return { products, total, loading, error };
};

export default useFetch;
