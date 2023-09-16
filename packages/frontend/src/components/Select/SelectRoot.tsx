import { ReactNode } from 'react';

interface SelectRootProps {
  children: ReactNode;
}

export function SelectRoot({ children }: SelectRootProps) {
  return <div className="flex flex-col">{children}</div>;
}
