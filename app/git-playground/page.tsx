"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gitProblems from "@/data/gitProblems";
import { Card, CardContent } from "@/components/Card";
import { Input } from "@/components/Input";

export default function LandingPage() {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState<
    { type: "user" | "system"; content: string }[]
  >([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    const userMessage: { type: "user" | "system"; content: string } = {
  type: "user",
  content: query,
};
    const matched = gitProblems.find(
      ({ problem, solution }) =>
        problem.toLowerCase().includes(query.toLowerCase()) ||
        solution.toLowerCase().includes(query.toLowerCase())
    );

   const systemMessage: { type: "user" | "system"; content: string } = {
  type: "system",
  content: matched
    ? `**Problem:** ${matched.problem}\n\n**Solution:** ${matched.solution}`
    : "Sorry, I couldn’t find a matching Git problem. Try rephrasing.",
};

    setHistory((prev) => [...prev, userMessage, systemMessage]);
    setQuery("");
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {history.length === 0 && (
            <div className="text-center text-gray-500">
              Ask me anything about Git problems...
            </div>
          )}
          {history.map((msg, idx) => (
            <Card
              key={idx}
              className={`w-fit max-w-xl ${
                msg.type === "user" ? "ml-auto bg-blue-100" : "mr-auto bg-gray-100"
              }`}
            >
              <CardContent className="p-3 whitespace-pre-wrap">
                {msg.content}
              </CardContent>
            </Card>
          ))}
        </div>
        <form
          onSubmit={handleSubmit}
          className="border-t px-4 py-3 bg-white flex gap-2"
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
      </main>
      <Footer />
    </div>
  );
}
