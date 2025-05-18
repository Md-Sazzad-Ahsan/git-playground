import * as React from "react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const Card = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "rounded-lg border border-gray-200 bg-gray-500 shadow",
      className
    )}
    {...props}
  />
);

const CardContent = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  // Extract only the solution part from markdown
  const extractSolution = (text: string) => {
    const match = text.match(/\*\*Solution:\*\*\s*([\s\S]*?)(?=\n\s*\*\*|$)/);
    return match ? match[1].trim() : text;
  };

  return (
    <div className={cn("p-4", className)} {...props}>
      {typeof children === "string" ? (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {extractSolution(children)}
        </ReactMarkdown>
      ) : (
        children
      )}
    </div>
  );
};

export { Card, CardContent };
