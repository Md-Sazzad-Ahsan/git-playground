"use client";

import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className = "", ...props }, ref) => (
    <input
      ref={ref}
      className={`border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black ${className}`}
      {...props}
    />
  )
);

Input.displayName = "Input";
