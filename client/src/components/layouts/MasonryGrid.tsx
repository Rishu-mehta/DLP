import { ReactNode } from "react";

interface MasonryGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function MasonryGrid({ children, columns = 3, className = "" }: MasonryGridProps) {
  const columnClasses = {
    2: "md:columns-2",
    3: "md:columns-3",
    4: "md:columns-4",
  };

  return (
    <div className={`columns-1 ${columnClasses[columns]} gap-6 space-y-6 ${className}`} data-testid="masonry-grid">
      {children}
    </div>
  );
}
