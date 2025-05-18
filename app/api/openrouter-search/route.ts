import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { query, history = [] } = await request.json();

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  // Base system message
  const systemMessage = {
    role: "system",
    content:
      "You are an expert Git assistant. Only answer questions that are commonly related to Git. If the question is not related to Git,decline with a poliet and intelligent response.' Provide clear, detailed, and step-by-step solutions for Git-related problems only.",
  };

  // Construct message array conditionally
  const messages =
    history.length > 0
      ? [systemMessage, ...history, { role: "user", content: query }]
      : [
          systemMessage,
          {
            role: "user",
            content: `Git problem:\n${query}\nIf this is unrelated to Git, say so. Otherwise, provide a detailed solution.`,
          },
        ];

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
        max_tokens: 600,
        temperature: 0.4,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.error || "OpenRouter API error" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const solution = data.choices?.[0]?.message?.content?.trim() ?? "No solution found.";

    return NextResponse.json({ solution });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
