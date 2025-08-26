import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Skelton from "../components/Skelton";
import useFetch from "../hooks/useFetch";
import Search from "../components/Search";
import ScrollToTop from "../components/ScrollToTop";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [page, setPage] = useState(1);
  const limit = 12;

  const skip = (page - 1) * limit;
  const baseUrl = searchItem?`/search?q=${searchItem}&limit=${limit}&skip=${skip}`:`${selectedCategory}?limit=${limit}&skip=${skip}`||"?limit=${limit}&skip=${skip}";
  console.log(baseUrl)
  const { products, loading, total } = useFetch(baseUrl);

  const handleNext = () => {
    if (page * limit < total) setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  useEffect(() => {
    setPage(1);
  }, [selectedCategory, searchItem,searchItem]);

  return (
    <div className="w-full px-2 flex flex-col gap-5 items-center">
      <Search
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setSearchItem={setSearchItem}
        searchItem={searchItem}
      />

      <div className="w-full flex flex-wrap gap-3 justify-center px-3">
        {loading &&
          Array.from({ length: limit }).map((_, i) => <Skelton key={i} />)}

        {!loading &&
          products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>

      <div className="flex items-center gap-4 my-6">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-4 py-2 rounded-lg border bg-white shadow-sm 
               disabled:opacity-50 disabled:cursor-not-allowed
               hover:bg-gray-100 transition"
        >
          Prev
        </button>

        <span className="text-gray-700 font-medium">
          Page {page} of {Math.ceil(total / limit)}
        </span>

        <button
          onClick={handleNext}
          disabled={page * limit >= total}
          className="px-4 py-2 rounded-lg border bg-white shadow-sm 
               disabled:opacity-50 disabled:cursor-not-allowed
               hover:bg-gray-100 transition"
        >
          Next
        </button>
      </div>

      <ScrollToTop />
    </div>
  );
}
