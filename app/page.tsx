"use client";

import { useState } from "react";
// import gitProblems from "@/data/gitProblems";
import { Card, CardContent } from "@/components/Card";
import SearchBar from "@/components/Searchbar";

type ChatMessage = {
  type: "user" | "system";
  content: string;
};

export default function LandingPage() {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState<ChatMessage[]>([]);

  const handleSubmit = (value: string, solution: string) => {
  if (!value.trim()) return;

  const userMessage: ChatMessage = { type: "user", content: value };
  const systemMessage: ChatMessage = {
    type: "system",
    content: `**Problem:** ${value}\n\n**Solution:** ${solution}`,
  };

  setHistory((prev) => [...prev, userMessage, systemMessage]);
  setQuery("");
};


  return (
    <div className="flex flex-col h-screen relative">
      {/* Scrollable chat messages container */}
      <main className="flex flex-col flex-1 overflow-y-auto px-4 pt-6 pb-[112px] space-y-4">
        {history.length === 0 && (
          <div className="text-center text-gray-500">
            Ask me anything about Git problems...
          </div>
        )}
        {history.map((msg, idx) => (
          <Card
            key={idx}
            className={`w-fit max-w-xl ${
              msg.type === "user" ? "ml-auto bg-gray-100" : "mr-auto bg-gray-50"
            }`}
          >
            <CardContent className="p-3 whitespace-pre-wrap">{msg.content}</CardContent>
          </Card>
        ))}
      </main>

      {/* Fixed SearchBar above footer */}
      <div className="fixed bottom-5 left-0 lg:left-24 right-0 z-40 lg:z-80 bg-white border-t border-gray-200 px-6 py-3 lg:ml-40">
        <SearchBar query={query} setQuery={setQuery} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
