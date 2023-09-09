import { ReactNode } from 'react';

interface HeaderNavIconProps {
  children: ReactNode;
}

export function HeaderNavIcon({ children }: HeaderNavIconProps) {
  return <div className="flex items-center justify-center">{children}</div>;
}
