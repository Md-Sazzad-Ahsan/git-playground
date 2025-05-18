// Footer.tsx
export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={`h-5 pb-1 text-xs bg-gray-100 text-gray-400 flex items-center justify-center px-6 ${className}`}>
      © 2025 Git Playground
    </footer>
  );
}
