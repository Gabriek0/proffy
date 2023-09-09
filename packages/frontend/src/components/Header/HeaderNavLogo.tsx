import { ReactNode } from 'react';

interface HeaderNavLogoProps {
  children: ReactNode;
}

export function HeaderNavLogo({ children }: HeaderNavLogoProps) {
  return <div className="flex items-center justify-center">{children}</div>;
}
