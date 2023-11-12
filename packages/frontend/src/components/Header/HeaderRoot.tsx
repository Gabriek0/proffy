import { ReactNode } from 'react';

interface HeaderRootProps {
  children: ReactNode;
}

export function HeaderRoot({ children }: HeaderRootProps) {
  return <div className="bg-[#8257E5] min-h-[320px]">{children}</div>;
}
