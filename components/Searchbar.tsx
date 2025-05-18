"use client";

import { Input } from "@/components/Input";
import { useEffect, useState } from "react";
import gitProblems from "@/data/gitProblems";
import { Button } from "@/components/ui/button";

type Props = {
  query: string;
  setQuery: (val: string) => void;
  onSubmit: (value: string, solution: string) => void; // lifted up to app/page.tsx
};

const SearchBar = ({ query, setQuery, onSubmit }: Props) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<
  { role: "user" | "assistant"; content: string }[]
>([]);

  useEffect(() => {
    const trimmed = query.toLowerCase().trim();
    if (!trimmed) {
      setSuggestions([]);
      setError(null);
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

const fetchSolution = async (problem: string) => {
  setLoading(true);
  setError(null);

  // Check local first
  const local = gitProblems.find((item) => item.problem === problem);
  if (local) {
    // Update history with local answer
    setHistory((prev) => [
      ...prev,
      { role: "user", content: problem },
      { role: "assistant", content: local.solution },
    ]);
    onSubmit(problem, local.solution);
    setQuery("");
    setLoading(false);
    return;
  }

  try {
    const res = await fetch("/api/openrouter-search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: problem, history }), // <-- pass history here
    });

    const data = await res.json();

    if (!res.ok || !data.solution) {
      setError("Error fetching solution.");
      onSubmit(problem, "Error fetching solution.");
    } else {
      // Update conversation history
      setHistory((prev) => [
        ...prev,
        { role: "user", content: problem },
        { role: "assistant", content: data.solution },
      ]);
      onSubmit(problem, data.solution);
      setQuery("");
    }
  } catch {
    setError("Error fetching solution");
    onSubmit(problem, "Error fetching solution.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="relative py-2 bg-white z-40">
      {suggestions.length > 0 && (
        <ul className="absolute bottom-full left-0 right-4 mb-2 bg-white border rounded-md shadow max-h-52 overflow-y-auto z-50">
          {suggestions.map((sugg, idx) => (
            <li
              key={idx}
              onClick={() => fetchSolution(sugg)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
            >
              {sugg}
            </li>
          ))}
        </ul>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (query.trim()) fetchSolution(query.trim());
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
        <Button
          disabled={loading}
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm"
        >
          {loading ? "Searching..." : "Search"}
        </Button>
      </form>

      {error && <p className="mt-2 text-red-600">{error}</p>}
    </div>
  );
};

export default SearchBar;
