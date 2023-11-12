import { ReactNode } from 'react';

interface HeaderContentTextProps {
  children: ReactNode;
}

export function HeaderContentText({ children }: HeaderContentTextProps) {
  return <h1 className="text-white font-bold text-3xl">{children}</h1>;
}
