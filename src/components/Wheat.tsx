export function Wheat({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 22V8" />
      <path d="M12 8c-2 0-3-1.5-3-3 1.8 0 3 1.2 3 3z" fill="currentColor" />
      <path d="M12 8c2 0 3-1.5 3-3-1.8 0-3 1.2-3 3z" fill="currentColor" />
      <path d="M12 12c-2.2 0-3.3-1.7-3.3-3.3 2 0 3.3 1.3 3.3 3.3z" fill="currentColor" />
      <path d="M12 12c2.2 0 3.3-1.7 3.3-3.3-2 0-3.3 1.3-3.3 3.3z" fill="currentColor" />
      <path d="M12 16c-2.2 0-3.3-1.7-3.3-3.3 2 0 3.3 1.3 3.3 3.3z" fill="currentColor" />
      <path d="M12 16c2.2 0 3.3-1.7 3.3-3.3-2 0-3.3 1.3-3.3 3.3z" fill="currentColor" />
      <path d="M12 20c-2.2 0-3.3-1.7-3.3-3.3 2 0 3.3 1.3 3.3 3.3z" fill="currentColor" />
      <path d="M12 20c2.2 0 3.3-1.7 3.3-3.3-2 0-3.3 1.3-3.3 3.3z" fill="currentColor" />
    </svg>
  );
}
