import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center my-6">
      <input
        type="text"
        placeholder="Enter an ingredient (e.g. chicken)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded-l px-4 py-2 w-2/3 md:w-1/3"
      />
      <button
        type="submit"
        className="bg-red-500 text-white px-4 py-2 rounded-r hover:bg-red-600"
      >
        Search
      </button>
    </form>
  );
}
