"use client";

import { Input } from "@/components/Input";
import { useEffect, useState } from "react";
import gitProblems from "@/data/gitProblems";

type Props = {
  query: string;
  setQuery: (val: string) => void;
  onSubmit: (value: string) => void;
};

const SearchBar = ({ query, setQuery, onSubmit }: Props) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const trimmed = query.toLowerCase().trim();
    if (!trimmed) {
      setSuggestions([]);
      return;
    }

    const matches = gitProblems
      .filter(
        ({ problem, solution }) =>
          problem.toLowerCase().includes(trimmed) ||
          solution.toLowerCase().includes(trimmed)
      )
      .map(({ problem }) => problem);

    setSuggestions(matches.slice(0, 5));
  }, [query]);

  return (
    <div className="relative border-t px-4 py-3 bg-white z-40">
      {/* Suggestions displayed above */}
      {suggestions.length > 0 && (
        <ul className="absolute bottom-full left-4 right-4 mb-2 bg-white border rounded-md shadow max-h-52 overflow-y-auto z-50">
          {suggestions.map((sugg, idx) => (
            <li
              key={idx}
              onClick={() => onSubmit(sugg)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
            >
              {sugg}
            </li>
          ))}
        </ul>
      )}

      {/* Input form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (query.trim()) onSubmit(query.trim());
        }}
        className="flex gap-2"
        autoComplete="off"
      >
        <Input
          placeholder="Ask a Git question..."
          className="flex-1"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md text-sm"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
