import { ReactNode } from 'react';

interface ClassCardRootProps {
  children: ReactNode;
}

export function ClassCardRoot({ children }: ClassCardRootProps) {
  return (
    <div className="p-8 rounded-md bg-white border border-gray-300 w-[800px] mb-4">
      {children}
    </div>
  );
}
