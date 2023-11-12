import { ReactNode } from 'react';

interface HeaderContentRoot {
  children: ReactNode;
}

export function HeaderContentRoot({ children }: HeaderContentRoot) {
  return (
    <div className="flex max-w-3xl justify-between items-center m-auto py-8 mt-12">
      {children}
    </div>
  );
}
