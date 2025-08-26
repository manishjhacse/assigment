import React, { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Search({
  selectedCategory,
  setSelectedCategory,
  setSearchItem,
  searchItem
}) {
  const categories = [
    "All",
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];

  const [placeholder, setPlaceholder] = useState("Choose Category");

  const handleCategoryChange = (event) => {
    setSearchItem("");
    const value = event.target.value;
    setSelectedCategory(value === "All" ? "" : `/category/${value}`);
    setPlaceholder(value === "All" ? "Choose Category" : value);
  };
  return (
    <div className="w-full flex gap-x-1 gap-y-2 md:flex-row flex-col items-center md:justify-center">
      <form
        className="w-full bg-white text-black rounded-full md:w-1/2 flex justify-center max-w-[1080px] px-2"
      >
        <input
          placeholder="Search item"
          className="w-full outline-none bg-transparent px-2 py-2 rounded-full"
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value)
            setSelectedCategory("");
            setPlaceholder("Choose Category");
          }}
          type="text"
        />
        <button type="submit" className="text-3xl font-bold">
          <CiSearch />
        </button>
      </form>

      {/* Categories */}
      <div className="flex items-center">
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="rounded-full cursor-pointer py-2 px-4 border border-gray-300 shadow-sm focus:outline-none focus:border-blue-400"
        >
          <option value="All">{placeholder}</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
