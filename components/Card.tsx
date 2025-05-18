import * as React from "react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("rounded-xl border border-gray-200 bg-white shadow", className)} {...props} />
);

const CardContent = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  // Function to remove Problem/Solution labels from markdown
  const cleanMarkdown = (text: string) => {
    return text
      .replace(/^\*\*Problem:\*\*\s*/g, '')
      .replace(/^\*\*Solution:\*\*\s*/g, '');
  };

  return (
    <div className={cn("p-4", className)} {...props}>
      {typeof children === 'string' ? (
        <ReactMarkdown>{cleanMarkdown(children)}</ReactMarkdown>
      ) : (
        children
      )}
    </div>
  );
};

export { Card, CardContent };