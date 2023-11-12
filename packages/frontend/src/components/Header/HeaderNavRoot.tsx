import { ReactNode } from 'react';

interface HeaderNavRoot {
  children: ReactNode;
}

export function HeaderNavRoot({ children }: HeaderNavRoot) {
  return (
    <nav className="bg-[#774DD6] flex justify-between p-2">{children}</nav>
  );
}
