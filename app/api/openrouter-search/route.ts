import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { query } = await request.json();

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are an expert Git assistant. Provide concise, clear solutions to Git problems.",
          },
          {
            role: "user",
            content: `Git problem:\n${query}\nProvide only the solution.`,
          },
        ],
        max_tokens: 300,
        temperature: 0.3,
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
